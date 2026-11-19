import {
  browserApiErrorsIntegration,
  dedupeIntegration,
  eventFiltersIntegration,
  getClient,
  globalHandlersIntegration,
  httpContextIntegration,
  init,
  linkedErrorsIntegration,
} from '@sentry/browser';

// Public DSN of the self-hosted Sentry project "robotics-directory". It can only submit events.
const DSN = 'https://d083614778a30443fc59a26e7423c42d@logging.gardenpiratez.de/58';
const PRODUCTION_HOST = 'robodirectory.huskynarr.de';

// Named imports keep the bundle small; a namespace import would pull in replay and feedback.
const browserSdk = {
  init,
  getClient,
  globalHandlersIntegration,
  browserApiErrorsIntegration,
  linkedErrorsIntegration,
  dedupeIntegration,
  eventFiltersIntegration,
  httpContextIntegration,
};

// Browser noise that says nothing about the site's own code.
const IGNORED_ERRORS = [
  'ResizeObserver loop limit exceeded',
  'ResizeObserver loop completed with undelivered notifications',
  /^Non-Error promise rejection captured/,
];
const DENIED_URLS = [/^(?:chrome|moz|safari(?:-web)?)-extension:\/\//i, /^webkit-masked-url:/i];

/**
 * Report errors only from the deployed site, never from dev, preview or test servers.
 */
export function shouldEnableMonitoring(location) {
  return location.protocol === 'https:' && location.hostname === PRODUCTION_HOST;
}

/**
 * Remove everything that could identify a visitor before an event leaves the browser.
 * Keeps the page path and user agent, which are needed to reproduce an error.
 */
export function scrubEvent(event) {
  delete event.user;
  delete event.breadcrumbs;
  if (event.request) {
    const userAgent = event.request.headers?.['User-Agent'];
    event.request = {
      url: event.request.url?.split(/[?#]/)[0],
      ...(userAgent && { headers: { 'User-Agent': userAgent } }),
    };
  }
  return event;
}

/**
 * Capture unhandled errors and promise rejections. No tracing, replay, sessions or breadcrumbs.
 */
export function initMonitoring({ location = window.location, sdk = browserSdk } = {}) {
  if (!shouldEnableMonitoring(location) || sdk.getClient()) return false;
  sdk.init({
    dsn: DSN,
    environment: 'production',
    release: import.meta.env.PUBLIC_SENTRY_RELEASE || undefined,
    sendDefaultPii: false,
    defaultIntegrations: false,
    integrations: [
      sdk.globalHandlersIntegration(),
      sdk.browserApiErrorsIntegration(),
      sdk.linkedErrorsIntegration(),
      sdk.dedupeIntegration(),
      sdk.eventFiltersIntegration(),
      sdk.httpContextIntegration(),
    ],
    tracesSampleRate: 0,
    maxBreadcrumbs: 0,
    ignoreErrors: IGNORED_ERRORS,
    denyUrls: DENIED_URLS,
    beforeSend: scrubEvent,
  });
  return true;
}

if (typeof window !== 'undefined') initMonitoring();
