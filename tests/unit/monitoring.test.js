import { describe, it, expect, vi } from 'vitest';
import {
  initMonitoring,
  scrubEvent,
  shouldEnableMonitoring,
} from '../../src/scripts/monitoring.js';

const production = { protocol: 'https:', hostname: 'robodirectory.huskynarr.de' };

function fakeSdk({ client = undefined } = {}) {
  const integration = (name) => vi.fn(() => ({ name }));
  return {
    getClient: vi.fn(() => client),
    init: vi.fn(),
    globalHandlersIntegration: integration('GlobalHandlers'),
    browserApiErrorsIntegration: integration('BrowserApiErrors'),
    linkedErrorsIntegration: integration('LinkedErrors'),
    dedupeIntegration: integration('Dedupe'),
    eventFiltersIntegration: integration('EventFilters'),
    httpContextIntegration: integration('HttpContext'),
  };
}

describe('shouldEnableMonitoring', () => {
  it('reports only from the production site over https', () => {
    expect(shouldEnableMonitoring(production)).toBe(true);
    expect(
      shouldEnableMonitoring({ protocol: 'http:', hostname: 'robodirectory.huskynarr.de' }),
    ).toBe(false);
    expect(shouldEnableMonitoring({ protocol: 'http:', hostname: 'localhost' })).toBe(false);
    expect(shouldEnableMonitoring({ protocol: 'https:', hostname: 'huskynarr.github.io' })).toBe(
      false,
    );
  });
});

describe('initMonitoring', () => {
  it('initializes the self-hosted project without tracing, replay or PII', () => {
    const sdk = fakeSdk();
    expect(initMonitoring({ location: production, sdk })).toBe(true);
    expect(sdk.init).toHaveBeenCalledTimes(1);
    const options = sdk.init.mock.calls[0][0];
    expect(new URL(options.dsn).hostname).toBe('logging.gardenpiratez.de');
    expect(options.sendDefaultPii).toBe(false);
    expect(options.defaultIntegrations).toBe(false);
    expect(options.tracesSampleRate).toBe(0);
    expect(options.maxBreadcrumbs).toBe(0);
    expect(options.integrations.map((i) => i.name)).not.toContain('Replay');
    expect(options.beforeSend).toBe(scrubEvent);
  });

  it('stays off outside production and does not initialize twice', () => {
    const local = fakeSdk();
    expect(
      initMonitoring({ location: { protocol: 'http:', hostname: 'localhost' }, sdk: local }),
    ).toBe(false);
    expect(local.init).not.toHaveBeenCalled();

    const existing = fakeSdk({ client: {} });
    expect(initMonitoring({ location: production, sdk: existing })).toBe(false);
    expect(existing.init).not.toHaveBeenCalled();
  });
});

describe('scrubEvent', () => {
  it('drops user data, breadcrumbs, query strings and all headers except the user agent', () => {
    const event = scrubEvent({
      user: { ip_address: '203.0.113.7' },
      breadcrumbs: [{ message: 'click' }],
      request: {
        url: 'https://robodirectory.huskynarr.de/?q=secret#top',
        headers: { 'User-Agent': 'Firefox', Referer: 'https://example.com/private' },
        cookies: { session: 'x' },
      },
      exception: { values: [{ type: 'TypeError' }] },
    });
    expect(event.user).toBeUndefined();
    expect(event.breadcrumbs).toBeUndefined();
    expect(event.request).toEqual({
      url: 'https://robodirectory.huskynarr.de/',
      headers: { 'User-Agent': 'Firefox' },
    });
    expect(event.exception.values[0].type).toBe('TypeError');
  });
});
