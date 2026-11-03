import { expect, test } from '@playwright/test';

test('software platforms remain distinct from robot bodies and source classifications', async ({
  page,
}) => {
  await page.goto('/brands/open-robotics/');
  const software = page.locator('[data-product-review-kind="software-reference"]');
  await expect(software).toHaveCount(3);
  await expect(software.locator('a[href^="/robot/"]')).toHaveCount(0);
  await expect(page.locator('main .robot-card')).toHaveCount(0);
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText('Gazebo');
  await page.goto('/brands/nuro/');
  const source = page.locator('[data-directory-product-id][data-mention-kind="software"]');
  await expect(source.locator('[data-product-review-kind="system-reference"]')).toContainText(
    'both in-vehicle software and hardware',
  );
  await expect(source.locator('a[href^="/robot/"]')).toHaveCount(0);
});

test('camera and audio components do not become robot model references', async ({ page }) => {
  await page.goto('/brands/dji-official/');
  const components = page.locator('[data-product-review-kind="component-reference"]');
  await expect(components).toHaveCount(8);
  await expect(components.locator('a[href^="/robot/"]')).toHaveCount(0);
  const osmo = page.locator('[data-directory-product-id]').filter({
    has: page.getByRole('heading', { name: 'Osmo 360', exact: true }),
  });
  await expect(osmo.locator('a[href="https://www.dji.com/360"]')).toBeVisible();
  await expect(osmo).toContainText('360-degree camera');
});

test('forklift configuration links preserve supplier boundaries and dated deployment claims', async ({
  page,
}) => {
  await page.goto('/brands/cyngn/');
  const reference = page.locator('[data-product-review-kind="configuration-reference"]');
  await expect(reference).toContainText('not a forklift lifting specification');
  await reference
    .getByRole('link', { name: 'Related catalog product: Cyngn DriveMod Forklift' })
    .click();
  await expect(page.locator('h1')).toHaveText('DriveMod Forklift');
  await expect(page.locator('main')).toContainText('BYD');
  await expect(page.locator('section[aria-labelledby="product-highlights"]')).toContainText(
    'October 2024',
  );
  await expect(page.locator('[data-spec-key="payload"]')).toHaveCount(0);
});

test('integrated cafe and welding offers keep appliance and arm suppliers visible', async ({
  page,
}) => {
  await page.goto('/brands/vlt-robotics/');
  await expect(page.locator('main .robot-card')).toHaveCount(3);
  await expect(
    page.locator('[data-product-review-kind="system-reference"] a[href^="/robot/"]'),
  ).toHaveCount(0);
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText('Franke');
  await page.goto('/robot/scalable-robotics-scalablearc-welding-cobot-cart/');
  await expect(page.locator('h1')).toHaveText('ScalableArc Welding Cobot Cart');
  await expect(page.locator('main')).toContainText('ABB remains the robot-arm manufacturer');
  await expect(page.locator('section[aria-labelledby="product-highlights"]')).toContainText(
    'GoFa-10',
  );
});

test('family references retain specific variants and separate provider identities', async ({
  page,
}) => {
  await page.goto('/brands/trossen-robotics/');
  await expect(page.locator('main .robot-card')).toHaveCount(0);
  const family = page.locator('[data-product-review-kind="family-reference"]');
  await expect(family.locator('a[href^="/robot/"]')).toHaveCount(3);
  await family
    .getByRole('link', { name: 'Related catalog product: Interbotix ALOHA Mobile', exact: true })
    .click();
  await expect(page.locator('h1')).toHaveText('ALOHA Mobile');
  await expect(page.locator('section[aria-labelledby="product-highlights"]')).toContainText(
    'joystick control',
  );
  await page.goto('/brands/rainbow-robotics/');
  const rb = page
    .locator('[data-directory-product-id]')
    .filter({ has: page.getByRole('heading', { name: 'RB', exact: true }) });
  const reviewed = rb.locator('[data-product-review-kind="family-reference"]');
  await expect(reviewed.locator('a[href^="/robot/"]')).toHaveCount(13);
  await expect(reviewed.locator('a[href="/robot/rainbow-robotics-rbq-10/"]')).toHaveCount(0);
  await expect(reviewed).toContainText('not exact configuration matches');
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
    await page.evaluate(() => window.innerWidth),
  );
});

test('SKYHUB is a sourced system reference with explicit simulation limits', async ({ page }) => {
  await page.goto('/brands/solartodo-limited/');
  const system = page.locator('[data-product-review-kind="system-reference"]');
  await expect(system).toContainText('not a single standalone robot model');
  await expect(system.locator('a[href^="/robot/"]')).toHaveCount(0);
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText('simulated');
  await expect(page.locator('main .robot-card')).toHaveCount(0);
  await expect(system.locator('a[href="https://solartodo.com/skyhub"]')).toBeVisible();
});

test('Inspire family links to the camera drone and keeps flight test conditions visible', async ({
  page,
}) => {
  await page.goto('/brands/dji-official/');
  const inspire = page.locator('[data-product-review-kind="family-reference"]');
  await inspire
    .getByRole('link', { name: 'Related catalog product: DJI Inspire 3', exact: true })
    .click();
  await expect(page.locator('h1')).toHaveText('Inspire 3');
  await expect(page.locator('[data-spec-key="weight"]')).toContainText('3.995 kg');
  await expect(page.locator('[data-spec-key="maxTakeoffWeight"]')).toContainText('4.310 kg');
  await expect(page.locator('[data-spec-key="flightTime"]')).toContainText(
    'until forced low-battery landing',
  );
  await expect(page.locator('[data-spec-source="flightTime"]')).toHaveAttribute(
    'href',
    'https://www.dji.com/inspire-3/specs',
  );
});

test('event offerings keep their names and evidence without claiming hardware models', async ({
  page,
}) => {
  for (const [brand, name] of [
    ['event-robot-com', 'Sparky'],
    ['scarlett-entertainment', 'Titan the Robot'],
  ]) {
    await page.goto(`/brands/${brand}/`);
    const item = page.locator('[data-directory-product-id]').filter({
      has: page.getByRole('heading', { name, exact: true }),
    });
    const review = item.locator('[data-product-review-kind="named-offering"]');
    await expect(item).toContainText('hardware model unverified');
    await expect(review.locator('a[href^="/robot/"]')).toHaveCount(0);
    await expect(review.locator('a[href^="https://"]').first()).toBeVisible();
  }
});

test('Bee-Bot links to TTS and Thymio keeps its generation-qualified reference', async ({
  page,
}) => {
  await page.goto('/brands/robotix-education/');
  await expect(page.locator('main .robot-card')).toHaveCount(0);
  const bee = page.locator('[data-product-review-kind="model-identity"]');
  await bee.getByRole('link', { name: 'Catalog model: TTS Bee-Bot', exact: true }).click();
  await expect(page.locator('h1')).toHaveText('Bee-Bot');
  await expect(page.locator('section[aria-labelledby="product-highlights"]')).toContainText(
    'Screen-free',
  );
  await page.goto('/brands/thymio-by-mobsya/');
  const family = page.locator('[data-product-review-kind="family-reference"]');
  await expect(family).toContainText('generation-unspecified');
  await expect(family.getByRole('link', { name: /^Related catalog product:/ })).toHaveAttribute(
    'href',
    '/robot/mobsya-thymio-ii/',
  );
  await expect(page.locator('section[aria-labelledby="brand-models"] .robot-card')).toHaveCount(1);
});

test('reviewed drone references link to manufacturer-evidenced catalog models', async ({
  page,
}) => {
  await page.goto('/brands/dji-official/');
  const names = page.locator('section[aria-labelledby="directory-products"]');
  await expect(names.locator('[data-product-review-kind="model-identity"]')).toHaveCount(4);
  await expect(
    names.getByRole('link', { name: 'Catalog model: DJI Mini 4 Pro', exact: true }),
  ).toHaveAttribute('href', '/robot/dji-mini-4-pro/');
  await names.getByRole('link', { name: 'Catalog model: DJI Mini 4 Pro', exact: true }).click();
  await expect(page.locator('h1')).toHaveText('Mini 4 Pro');
  await expect(page.locator('section[aria-labelledby="product-highlights"]')).toContainText(
    'True vertical',
  );
});

test('related versions remain qualified and providers do not become manufacturers', async ({
  page,
}) => {
  await page.goto('/brands/softbank-robotics/');
  const family = page.locator('[data-product-review-kind="family-reference"]');
  await expect(family).toContainText('not evidence');
  await expect(family.getByRole('link', { name: /^Related catalog product:/ })).toHaveAttribute(
    'href',
    '/robot/aldebaran-nao-6/',
  );
  await page.goto('/brands/elite-event-robotics/');
  await expect(page.locator('main .robot-card')).toHaveCount(0);
  const review = page.locator('[data-product-review-kind="model-identity"]');
  await expect(review).toContainText('separate provider profile');
  await expect(
    review.getByRole('link', { name: 'Catalog model: Unitree G1', exact: true }),
  ).toHaveAttribute('href', '/robot/unitree-g1/');
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
    await page.evaluate(() => window.innerWidth),
  );
});

test('typed display and original Bit decisions are visible without inventing duplicate models', async ({
  page,
}) => {
  await page.goto('/brands/tokinomo/');
  const nonRobot = page.locator('[data-product-review-kind="non-robot-device"]');
  await expect(nonRobot).toContainText('does not document robotic motion');
  await expect(nonRobot.locator('a[href^="/robot/"]')).toHaveCount(0);
  await page.goto('/brands/ozobot/');
  await expect(
    page.locator('[data-product-review-kind="model-identity"] a[href="/robot/ozobot-bit/"]'),
  ).toHaveCount(1);
  await expect(
    page.locator('section[aria-labelledby="brand-models"] a[href="/robot/ozobot-bit-plus/"]'),
  ).toHaveCount(1);
});

test('company product names are searchable and typed separately from catalog models', async ({
  page,
}) => {
  await page.goto('/brands/?q=SuperDrive');
  await page.getByRole('link', { name: 'PlusAI', exact: true }).click();
  const names = page.locator('section[aria-labelledby="directory-products"]');
  await expect(names.locator('[data-mention-kind="software"]')).toHaveCount(2);
  await expect(names.locator('[data-product-review-kind="software-reference"]')).toHaveCount(2);
  await expect(names.locator('a[href^="/robot/"]')).toHaveCount(0);
  await expect(names.locator('time[datetime="2026-11-01T17:58:29Z"]')).toHaveCount(2);
  await expect(
    names.locator('a[href="https://buyandrentrobots.com/companies/plusai"]'),
  ).toHaveCount(2);
  await expect(page.locator('main .robot-card')).toHaveCount(0);
  await page.goto('/brands/capra-robotics/');
  const label = page.locator('[data-mention-kind="configuration-label"]');
  await expect(label.locator('h3')).toHaveText('500');
  await expect(label).toContainText('Source context: Capra 200 and 500');
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
    await page.evaluate(() => window.innerWidth),
  );
  await page.goto('/brands/hand-plus-robotics/');
  const historical = page.locator('[data-directory-product-id]').filter({
    has: page.getByRole('heading', { name: 'APP+', exact: true }),
  });
  await expect(historical.locator('[data-product-review-kind="software-reference"]')).toContainText(
    'historical programme-partner reference',
  );
  await expect(historical).toContainText('no source establishes APP+ and 1+OS as aliases');
  await expect(historical.locator('a[href^="/robot/"]')).toHaveCount(0);
});

test('Hand Plus own picking cells remain distinct from its partner equipment and old software name', async ({
  page,
}) => {
  await page.goto('/brands/hand-plus-robotics/');
  await expect(page.locator('main .robot-card')).toHaveCount(3);
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText('partner');
  await page.goto('/robot/hand-plus-robotics-move-plus/');
  await expect(page.locator('h1')).toHaveText('MOVE+');
  await expect(page.locator('section[aria-labelledby="product-highlights"]')).toContainText(
    'autonomous mobile base',
  );
  await expect(page.locator('[data-spec-key="payload"]')).toHaveCount(0);
});

test('Kime V5 uses a versioned card and keeps vision and software-access claims qualified', async ({
  page,
}) => {
  await page.goto('/brands/macco-robotics/');
  await expect(page.locator('main .robot-card')).toHaveCount(4);
  const version = page.locator('[data-directory-product-id]').filter({
    has: page.getByRole('heading', { name: 'Kime v5', exact: true }),
  });
  await expect(version).toContainText(
    'not verification of the directory claim of computer-vision portion control',
  );
  await version
    .getByRole('link', { name: 'Related catalog product: Macco Robotics Kime V5' })
    .click();
  await expect(page.locator('h1')).toHaveText('Kime V5');
  await expect(page.locator('section[aria-labelledby="product-highlights"]')).toContainText(
    'Macco technical personnel manage software/configuration',
  );
  await expect(page.locator('[data-spec-key="payload"]')).toContainText('5 kg per arm');
  await expect(page.locator('[data-spec-source="payload"]')).toHaveAttribute(
    'data-review-status',
    'documented',
  );
});

test('VEX is a sourced brand reference and SKYHUB components remain catalogue-only', async ({
  page,
}) => {
  await page.goto('/brands/idesign-365/');
  const brand = page.locator('[data-product-review-kind="brand-reference"]');
  await expect(brand).toContainText('not one selected robot');
  await expect(brand.locator('a[href^="/robot/"]')).toHaveCount(0);
  await expect(page.locator('main .robot-card')).toHaveCount(0);
  await page.goto('/brands/solartodo-limited/');
  const focus = page.locator('section[aria-labelledby="company-focus"]');
  await expect(focus).toContainText('does not establish a delivered site');
  await expect(focus).toContainText('STTBOT-S1');
  await expect(focus).toContainText('STTBOT-T1');
  await expect(page.locator('main .robot-card')).toHaveCount(0);
});

test('DJI names distinguish drones from camera and accessory names', async ({ page }) => {
  await page.goto('/brands/dji-official/');
  const names = page.locator('section[aria-labelledby="directory-products"]');
  await expect(names.locator('[data-mention-kind="model"]')).toHaveCount(4);
  await expect(
    names.locator('[data-mention-kind="component"], [data-mention-kind="component-family"]'),
  ).toHaveCount(8);
  await expect(names.locator('[data-directory-product-id]')).toHaveCount(13);
  await expect(names.locator('.robot-card')).toHaveCount(0);
});

test('Shelfobot has manufacturer highlights while Visibubble remains a separate directory name', async ({
  page,
}) => {
  await page.goto('/brands/tokinomo/');
  await expect(
    page.locator('section[aria-labelledby="directory-products"] [data-directory-product-id]'),
  ).toHaveCount(2);
  await expect(
    page.locator('section[aria-labelledby="brand-models"] a[href="/robot/tokinomo-shelfobot/"]'),
  ).toHaveCount(1);
  await expect(page.locator('main .robot-card')).toHaveCount(1);
  await page
    .locator('section[aria-labelledby="brand-models"] a[href="/robot/tokinomo-shelfobot/"]')
    .click();
  await expect(page.locator('h1')).toHaveText('Shelfobot');
  const highlights = page.locator('section[aria-labelledby="product-highlights"]');
  await expect(highlights).toContainText('swing arm');
  await expect(highlights.locator('a').first()).toHaveAttribute(
    'href',
    'https://www.tokinomo.com/product-shelfobot',
  );
});

test('company description themes are searchable and distinguishable from listing themes', async ({
  page,
}) => {
  await page.goto('/brands/?q=Ethernet%20communication');
  await page.getByRole('link', { name: 'HEBI Robotics', exact: true }).click();
  const themes = page.locator('section[aria-labelledby="directory-themes"]');
  await expect(themes).toContainText('Company description and listed use cases');
  await expect(themes).toContainText('Ethernet communication');
  await expect(themes).toContainText('Product and service listing descriptions');
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
    await page.evaluate(() => window.innerWidth),
  );
});

test('reviewed company website preserves the source candidate and unresolved model boundaries', async ({
  page,
}) => {
  await page.goto('/brands/zhigu-tianchu/');
  await expect(
    page.getByRole('heading', { name: 'Company website from reviewed sources' }),
  ).toBeVisible();
  await expect(page.locator('main a[href="https://www.t-chef.com.cn/"]').first()).toBeVisible();
  await expect(page.locator('main a[href="https://eu.36kr.com"]')).toBeVisible();
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
    'Cooking Domain Agent',
  );
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
    'do not establish',
  );
  await expect(page.locator('main .robot-card')).toHaveCount(6);
  await expect(page.locator('main a[href="/robot/t-chef-tc-e40a/"]')).toHaveCount(1);
  await expect(page.locator('main')).toContainText('Delivery Bot or EduBot');
});

test('cooking comparison separates batch capacity, machine mass and heating method', async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'en');
    localStorage.setItem('compareRobots', JSON.stringify(['t-chef-e10a', 't-chef-tc-g1000']));
  });
  await page.goto('/robot/t-chef-tc-40ea-us/');
  await expect(page.locator('[data-spec-key="cookingCapacity"]')).toHaveText(
    'optimal 2 kg; maximum stir-fry 4 kg per batch',
  );
  await expect(page.locator('[data-spec-source="cookingCapacity"]')).toHaveAttribute(
    'href',
    'https://en.t-chef.com.cn/products_38/227.html',
  );
  await page.goto('/brands/zhigu-tianchu/');
  await page.getByRole('button', { name: 'Compare TC-40EA-US', exact: true }).click();
  await page.locator('#compareBarBtn').click();
  const table = page.locator('#compareTableContainer');
  const row = (name) =>
    table.getByRole('row').filter({ has: page.getByRole('cell', { name, exact: true }) });
  await expect(row('Cooking capacity per batch')).toContainText('maximum 1 kg per batch');
  await expect(row('Cooking capacity per batch')).toContainText('maximum 100 kg per batch');
  await expect(row('Cooking capacity per batch')).toContainText('optimal 2 kg');
  await expect(row('Weight')).toContainText('360 kg');
  await expect(row('Heat source')).toContainText('Gas (natural gas / LPG variants)');
  await expect(row('Heat source')).toContainText('Electromagnetic (induction)');
  await expect(row('Payload')).toHaveCount(0);
});

test('cooking model sources and labels remain available after German translation', async ({
  page,
}) => {
  await page.goto('/robot/t-chef-tc-g300/?lang=de');
  await expect(page.locator('[data-spec-key="cookingCapacity"]')).toHaveText(
    'maximum 30 kg per batch',
  );
  await expect(page.locator('[data-i18n="spec.cookingCapacity"]')).toHaveText(
    'Kochkapazität je Charge',
  );
  await expect(page.locator('[data-spec-source="cookingCapacity"]')).toContainText(
    'Quellenprüfung',
  );
  await expect(page.locator('[data-spec-source="heatSource"]')).toHaveAttribute(
    'href',
    'https://en.t-chef.com.cn/products_39/79.html',
  );
  await expect(page.locator('main')).not.toContainText('20%');
});

test('brand profiles separate first-party focus from directory themes and expose named TGW systems', async ({
  page,
}) => {
  await page.goto('/brands/tgw-logistics/');
  const focus = page.locator('section[aria-labelledby="company-focus"]');
  await expect(focus).toContainText('Warehouse automation systems integrator');
  await expect(focus).toContainText('do not establish TGW as the manufacturer');
  await expect(focus.locator('time[datetime="2026-11-02"]')).toHaveCount(1);
  for (const model of ['pickcenter', 'inductcenter', 'decantcenter']) {
    await expect(
      page.locator(`main a[href="/robot/tgw-logistics-${model}-rovoflex/"]`),
    ).toHaveCount(1);
  }
  await expect(page.locator('section[aria-labelledby="directory-themes"]')).toContainText(
    'Unverified themes',
  );
  await page.goto('/robot/tgw-logistics-decantcenter-rovoflex/');
  await expect(page.locator('h1')).toHaveText('DecantCenter RovoFlex');
  await expect(page.locator('section[aria-labelledby="product-highlights"]')).toContainText(
    '3D vision',
  );
});

test('brand search includes company focus and profiles qualify financing-client references', async ({
  page,
}) => {
  await page.goto('/brands/');
  await page.locator('#brand-search').fill('investor checkout');
  await expect(page.locator('[data-brand-entry]:visible')).toHaveCount(1);
  await page.getByRole('link', { name: 'DealMaker', exact: true }).click();
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
    'financing clients',
  );
  const themes = page.locator('section[aria-labelledby="directory-themes"]');
  await expect(themes).toContainText('Unverified themes');
  const source = themes.getByRole('link', { name: /^BuyAndRentRobots listing/ });
  await expect(source).toBeVisible();
  await expect(source).toHaveAttribute('href', 'https://buyandrentrobots.com/companies/dealmaker');
  await expect(page.locator('main .robot-card')).toHaveCount(0);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
    await page.evaluate(() => window.innerWidth),
  );
});

test('reviewed specifications preserve source links and configuration limits after translation', async ({
  page,
}) => {
  await page.goto('/robot/pudu-robotics-pudu-d9/?lang=de');
  await expect(page.locator('[data-spec-key="weight"]')).toHaveText('65 kg');
  await expect(page.locator('[data-spec-source="weight"]')).toContainText('Quellenprüfung');
  await expect(page.locator('[data-spec-source="weight"]')).toHaveAttribute(
    'href',
    'https://www.pudurobotics.com/en/products/d9',
  );
  await expect(page.locator('[data-spec-source="weight"] time')).toHaveAttribute(
    'datetime',
    '2026-11-01',
  );
  await expect(page.locator('[data-spec-key="batteryLife"]')).toHaveCount(0);
  await expect(page.locator('[data-spec-key="payload"]')).toContainText('test environment');
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
    await page.evaluate(() => window.innerWidth),
  );
  await page.goto('/robot/pudu-robotics-pudu-d7/');
  await expect(page.locator('[data-spec-key="weight"]')).toHaveText('140 kg');
  await expect(page.locator('[data-spec-key="batteryLife"]')).toHaveCount(0);
  await page.goto('/robot/rainbow-robotics-rb-y1/');
  await expect(page.locator('[data-spec-key="dof"]')).toContainText('counts conflict');
  await expect(page.locator('[data-spec-source="dof"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await page.goto('/robot/knightscope-k7/');
  await expect(page.locator('[data-spec-key="speed"]')).toContainText('under development');
  await expect(page.locator('[data-spec-source="speed"]')).toHaveAttribute(
    'data-review-status',
    'roadmap',
  );
});

test('charging duration is separate from endurance and structured prices do not imply stock', async ({
  page,
}) => {
  await page.goto('/robot/booster-robotics-booster-t1/');
  await expect(page.locator('[data-spec-key="chargingTime"]')).toContainText('≤2 hours');
  await expect(page.locator('[data-spec-key="batteryLife"]')).toContainText('2 hours');
  await expect(page.locator('[data-spec-key="maxRuntime"]')).toHaveCount(0);
  const properties = await page
    .locator('script[type="application/ld+json"]')
    .evaluateAll(
      (scripts) =>
        scripts
          .map((script) => JSON.parse(script.textContent))
          .find((item) => item['@type'] === 'Product').additionalProperty,
    );
  expect(properties.find((prop) => prop.name === 'Charging time').value).toBe('≤2 hours');
  await page.evaluate(() =>
    localStorage.setItem(
      'compareRobots',
      JSON.stringify(['booster-robotics-booster-t1', 'makeblock-mbot-neo']),
    ),
  );
  await page.reload();
  await page.locator('#compareBarBtn').click();
  const chargingRow = page.locator('#compareTableContainer').getByRole('row', {
    name: /Charging time/,
  });
  await expect(chargingRow).toContainText('≤2 hours');
  await expect(chargingRow).toContainText('approximately 1 hour via USB');
  for (const id of ['beatbot-iskim', 'makeblock-mbot-neo', 'agibot-d1-ultra-w']) {
    await page.goto(`/robot/${id}/`);
    await expect(page.locator('[data-spec-key="chargingTime"]')).toBeVisible();
    await expect(page.locator('[data-spec-key="maxRuntime"]')).toHaveCount(0);
  }
  await page.goto('/robot/unitree-go2-pro/');
  const product = await page
    .locator('script[type="application/ld+json"]')
    .evaluateAll((scripts) =>
      scripts
        .map((script) => JSON.parse(script.textContent))
        .find((item) => item['@type'] === 'Product'),
    );
  expect(product.offers).toBeDefined();
  expect(product.offers.availability).toBeUndefined();
});

test('Ameca identity correction retains old links, favorites and comparison selections', async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem('robotFavorites', JSON.stringify(['ameca-ameca']));
    localStorage.setItem('compareRobots', JSON.stringify(['ameca-ameca', 'unitree-go2-w']));
  });
  await page.goto('/robot/ameca-ameca/');
  await expect(page).toHaveURL(/\/robot\/engineered-arts-ameca\//);
  await expect(page.locator('h1')).toHaveText('Ameca');
  await expect(page.locator('section[aria-labelledby="product-highlights"]')).toContainText(
    'mains power',
  );
  await expect(page.locator('[data-spec-key="batteryLife"]')).toHaveCount(0);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    /\/robot\/engineered-arts-ameca\//,
  );
  await expect
    .poll(() => page.evaluate(() => JSON.parse(localStorage.getItem('robotFavorites'))))
    .toEqual(['engineered-arts-ameca']);
  await expect
    .poll(() => page.evaluate(() => JSON.parse(localStorage.getItem('compareRobots'))))
    .toEqual(['engineered-arts-ameca', 'unitree-go2-w']);
});

test('reception and telepresence models are discoverable with dated feature limitations', async ({
  page,
}) => {
  await page.goto('/?category=commercial&subcategory=commercial-reception&q=GreetingBot');
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(2);
  await page.locator('#robotsGrid a[href="/robot/orionstar-greetingbot-nova/"]').first().click();
  await expect(page.getByRole('heading', { name: 'Product highlights' })).toBeVisible();
  await expect(page.locator('section[aria-labelledby="product-highlights"]')).toContainText(
    'Marker-free',
  );
  await page.goto('/?category=commercial&subcategory=commercial-telepresence&q=Double%203');
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(1);
  await page.goto('/robot/pudu-robotics-bellabot-pro/');
  await expect(page.locator('section[aria-labelledby="product-highlights"]')).toContainText(
    'under development',
  );
  await page.goto('/robot/unitree-h2/');
  await expect(page.locator('section[aria-labelledby="product-highlights"]')).toContainText(
    'limits secondary development support to H2 EDU',
  );
});

test('Macco hospitality configurations are searchable as separate named offers', async ({
  page,
}) => {
  await page.goto('/?category=commercial&q=Kime');
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(4);
  for (const model of ['bartender', 'chef', 'kiosk', 'v5']) {
    await expect(
      page.locator(`#robotsGrid a[href="/robot/macco-robotics-kime-${model}/"]`).first(),
    ).toBeVisible();
  }
  await page.locator('#robotsGrid a[href="/robot/macco-robotics-kime-chef/"]').first().click();
  await expect(page.locator('h1')).toHaveText('Kime Chef');
  await expect(page.locator('main')).toContainText('hot dishes, salads and bowls');
  await expect(
    page.getByRole('link', { name: 'Macco Robotics — rendered manufacturer hospitality lineup' }),
  ).toBeVisible();
  await expect(page.locator('main')).not.toContainText('€/mes');
});

test('developer and integration-partner evidence retain their actual source roles', async ({
  page,
}) => {
  await page.goto('/robot/rainbow-robotics-fx-2/');
  const sources = page.locator('section[aria-labelledby="product-highlights"]');
  await expect(sources).toContainText('Developer source');
  await expect(sources).not.toContainText('Manufacturer source');
  await expect(page.locator('main')).toContainText('human-ridden walking robot');
  await page.goto('/robot/kawasaki-yf002n/');
  await expect(sources).toContainText('Integration partner source');
  await expect(sources).not.toContainText('Manufacturer source');
  await expect(page.locator('[data-spec-key="payload"]')).toHaveText('2 kg');
  await page.goto('/robot/kawasaki-yf003n/');
  await expect(page.locator('[data-spec-key="payload"]')).toHaveText('3 kg');
});

test('AgiBot wheel-leg variant search leads to variant-specific specifications', async ({
  page,
}) => {
  await page.goto('/?q=D1%20Ultra-W&category=quadruped');
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(1);
  await page.locator('#robotsGrid a[href="/robot/agibot-d1-ultra-w/"]').first().click();
  await expect(page.locator('[data-spec-key="weight"]')).toHaveText('22 kg including battery');
  await expect(page.locator('[data-spec-key="payload"]')).toHaveText('5 kg');
  await expect(page.locator('[data-spec-key="chargingTime"]')).toContainText('10% to 90%');
});

test('Karcher operating endurance is not displayed as charging duration', async ({ page }) => {
  for (const id of ['kaercher-rcv-3', 'kaercher-rcv-5']) {
    await page.goto(`/robot/${id}/`);
    await expect(page.locator('[data-spec-key="batteryLife"]')).toContainText('120 min');
    await expect(page.locator('[data-spec-key="maxRuntime"]')).toHaveCount(0);
    await expect(page.locator('main')).toContainText('Kärcher — US');
  }
});

test('learning kits with unspecified ages are discoverable through the coding filter', async ({
  page,
}) => {
  await page.goto('/?category=educational&subcategory=educational-coding&q=mBot%20Ranger');
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(1);
  await page.locator('#robotsGrid a[href="/robot/makeblock-mbot-ranger/"]').first().click();
  await expect(page.locator('h1')).toHaveText('mBot Ranger');
  await expect(page.locator('main')).toContainText('Three-in-one construction kit');
});

test('deployment evidence is distinguished from manufacturer sources on model pages', async ({
  page,
}) => {
  await page.goto('/robot/construction-robotics-sam100/');
  const sources = page.locator('section[aria-labelledby="product-highlights"]');
  await expect(sources).toContainText('Deployment owner source');
  await expect(sources).not.toContainText('Manufacturer source');
  await expect(sources).toContainText('University of Nevada, Reno');
  await expect(page.locator('main')).toContainText('Historical semi-automated bricklaying robot');
  await page.goto('/robot/geek-plus-p800r-v6-0/');
  await expect(page.locator('[data-spec-key="payload"]')).toHaveText('800 kg');
  await page.goto('/robot/geek-plus-p800r/');
  await expect(page.locator('[data-spec-key="payload"]')).toHaveText('1000 kg');
});

test('brand search finds aliases and Unicode names, with an empty state', async ({ page }) => {
  await page.goto('/brands/');
  const search = page.getByRole('searchbox', { name: 'Search brands' });
  await search.fill('staubli');
  await expect(page.locator('[data-brand-entry]:visible')).toHaveCount(1);
  await expect(page.locator('[data-brand-entry]:visible')).toContainText('Stäubli');
  await search.fill('this-brand-does-not-exist-xyz');
  await expect(page.locator('#brand-empty')).toBeVisible();
  await expect(page.locator('[data-brand-entry]:visible')).toHaveCount(0);
});

test('source-only companies have no invented model cards', async ({ page }) => {
  await page.goto('/brands/cognex/');
  await expect(page.locator('h1')).toHaveText('Cognex');
  await expect(page.locator('main')).toContainText('Company entry only');
  await expect(page.locator('main .robot-card')).toHaveCount(0);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, follow');
  await expect(page.locator('a[href="https://roboticsdir.com/"]').first()).toBeVisible();
});

test('new models connect source evidence, a brand profile and the full shared catalog', async ({
  page,
}) => {
  await page.goto('/robot/kuka-lbr-iiwa-7-r800/');
  await expect(page.locator('h1')).toHaveText('LBR iiwa 7 R800');
  await expect(page.getByRole('heading', { name: 'Product highlights' })).toBeVisible();
  await expect(page.locator('main')).toContainText('800 mm reach');
  await expect(page.locator('a[href="/brands/kuka/"]').first()).toBeVisible();
  expect(await page.evaluate(() => window.__ROBOTS_DATA__.length)).toBeGreaterThan(1255);
  await page.locator('a[href="/brands/kuka/"]').first().click();
  await expect(page.locator('h1')).toHaveText('KUKA');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /^index, follow/);
  await expect(page.locator('main a[href="/robot/kuka-lbr-iiwa-7-r800/"]')).toBeVisible();
});

test('favorites from other brands remain available through the shared catalog', async ({
  page,
  viewport,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'en');
    localStorage.setItem('robotFavorites', JSON.stringify(['boston-dynamics-spot']));
  });
  await page.goto('/brands/kuka/');
  if (viewport.width < 768) await page.locator('#mobileMenuToggle').click();
  await page.locator(viewport.width < 768 ? '#favoritesToggleMobile' : '#favoritesToggle').click();
  await expect(page.locator('#favoritesDrawer')).toHaveClass(/active/);
  await expect(page.locator('#favoritesGrid a[href="/robot/boston-dynamics-spot/"]')).toBeVisible();
});

test('commercial category renders the new models', async ({ page }) => {
  await page.goto('/?category=commercial');
  await expect(page.locator('#robotsGrid .robot-card').first()).toBeVisible();
  const categories = await page
    .locator('#robotsGrid .robot-card')
    .evaluateAll((cards) => cards.map((card) => card.dataset.category));
  expect(categories.every((category) => category === 'commercial')).toBe(true);
  await page.goto('/category/commercial/');
  await expect(page.locator('h1')).toContainText('Commercial');
});

test('category navigation works from a brand profile', async ({ page, viewport }) => {
  await page.goto('/brands/kuka/');
  if (viewport.width < 768) {
    await page.locator('#mobileMenuToggle').click();
    await page.locator('.mobile-accordion-trigger[data-category="commercial"]').click();
    await page.locator('[data-mobile-viewall][data-category="commercial"]').click();
  } else {
    await page.locator('[data-megatab="commercial"]').click();
    await page.locator('.mega-view-all[data-category="commercial"]').click();
  }
  await expect(page).toHaveURL(/category=commercial/);
  await expect(page.locator('#robotsGrid .robot-card').first()).toBeVisible();
});

test('industry search finds a heavy AMR with its manufacturer specification source', async ({
  page,
}) => {
  await page.goto('/?q=OTTO%201500&usecase=industry');
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(1);
  await page.locator('#robotsGrid a[href="/robot/otto-motors-otto-1500/"]').first().click();
  await expect(page.locator('h1')).toHaveText('OTTO 1500');
  await expect(page.locator('[data-spec-key="payload"]')).toHaveText('1900 kg');
  await expect(page.getByRole('link', { name: 'OTTO Motors specification sheet' })).toBeVisible();
});

test('mobile manipulators use Enabled Robotics attribution rather than the MiR base supplier', async ({
  page,
}) => {
  await page.goto('/robot/enabled-robotics-er-max-600-20/');
  await expect(page.locator('h1')).toHaveText('ER-MAX 600-20');
  await expect(page.locator('a[href="/brands/enabled-robotics/"]').first()).toHaveText(
    'Enabled Robotics',
  );
  await expect(page.locator('[data-spec-key="payload"]')).toHaveText('25 kg (manipulator)');
  await page.goto('/brands/mobile-industrial-robots-mir/');
  await expect(page.locator('main a[href="/robot/mir-mir100/"]')).toBeVisible();
  await expect(
    page.locator('main a[href="/robot/mobile-industrial-robots-mir250/"]'),
  ).toBeVisible();
  await expect(page.locator('main .robot-card').filter({ hasText: 'ER-MAX' })).toHaveCount(0);
});

test('marine navigation finds surface vessels and ROVs with explicit depth ratings', async ({
  page,
  viewport,
}) => {
  await page.goto('/');
  if (viewport.width < 768) {
    await page.locator('#mobileMenuToggle').click();
    await page.locator('.mobile-accordion-trigger[data-category="commercial"]').click();
    await page.locator('#mobileDrawer [data-subcategory="commercial-marine"]').click();
  } else {
    await page.locator('[data-megatab="commercial"]').click();
    await page.locator('#megaMenu [data-subcategory="commercial-marine"]').click();
  }
  await expect(page).toHaveURL(/sub=commercial-marine/);
  await expect(page.locator('#robotsGrid a[href="/robot/blue-robotics-blueboat/"]')).toBeVisible();
  await expect(page.locator('#robotsGrid a[href="/robot/otto-motors-otto-1500/"]')).toHaveCount(0);
  await page.locator('#robotsGrid a[href="/robot/deep-trekker-pivot/"]').first().click();
  await expect(page.locator('[data-spec-key="depthRating"]')).toHaveText('305 m');
  await expect(page.locator('main')).toContainText(
    'Positioning and navigation tools depend on the selected package',
  );
});

for (const [subcategory, product, otherProduct, search] of [
  ['commercial-healthcare', 'ekso-bionics-eksonr', 'farmdroid-fd20'],
  ['commercial-agriculture', 'farmdroid-fd20', 'ekso-bionics-eksonr'],
  ['commercial-telepresence', 'boteyes-boteyes-pad', 'pal-robotics-tiago-pro'],
  ['commercial-research', 'pal-robotics-tiago-pro', 'boteyes-boteyes-pad'],
  ['commercial-aerial', 'skydio-x10', 'pal-robotics-tiago-pro', 'X10'],
  ['commercial-food-service', 't-chef-tc-g1000', 'farmdroid-fd20', 'TC-G1000'],
  ['cleaning-commercial', 'ohmnilabs-ohmniclean-robot', 'boteyes-boteyes-pad', 'OhmniClean'],
]) {
  test(`${subcategory} can be selected from navigation`, async ({ page, viewport }) => {
    await page.goto('/');
    const category = subcategory.split('-')[0];
    if (viewport.width < 768) {
      await page.locator('#mobileMenuToggle').click();
      await page.locator(`.mobile-accordion-trigger[data-category="${category}"]`).click();
      await page.locator(`#mobileDrawer [data-subcategory="${subcategory}"]`).click();
    } else {
      await page.locator(`[data-megatab="${category}"]`).click();
      await page.locator(`#megaMenu [data-subcategory="${subcategory}"]`).click();
    }
    await expect(page).toHaveURL(new RegExp(`sub=${subcategory}`));
    await expect(page.locator('#robotsGrid .robot-card').first()).toBeVisible();
    const shownCategories = await page
      .locator('#robotsGrid .robot-card')
      .evaluateAll((cards) => cards.map((card) => card.dataset.category));
    expect(new Set(shownCategories)).toEqual(new Set([category]));
    await expect(page.locator(`#robotsGrid a[href="/robot/${otherProduct}/"]`)).toHaveCount(0);
    if (search) await page.locator('#searchInput').fill(search);
    await expect(page.locator(`#robotsGrid a[href="/robot/${product}/"]`)).toBeVisible();
    if (viewport.width < 768)
      await expect(page.locator('#mobileMenuToggle')).toHaveAttribute('aria-expanded', 'false');
  });
}

test('comparison includes depth and payload rather than hiding category-specific specifications', async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'en');
    localStorage.setItem('compareRobots', JSON.stringify(['capra-robotics-capra-carrier']));
  });
  await page.goto('/brands/deep-trekker/');
  await page.getByRole('button', { name: 'Compare PHOTON', exact: true }).click();
  await page.getByRole('button', { name: 'Compare PIVOT', exact: true }).click();
  const dtg = page.getByRole('button', { name: 'Compare DTG3', exact: true });
  await dtg.click();
  await expect(page.getByRole('button', { name: 'Compare SPECTRA', exact: true })).toBeDisabled();
  await dtg.click();
  await expect(page.getByRole('button', { name: 'Compare SPECTRA', exact: true })).toBeEnabled();
  await page.locator('#compareBarBtn').click();
  const table = page.locator('#compareTableContainer');
  const depth = table
    .getByRole('row')
    .filter({ has: page.getByRole('cell', { name: 'Depth rating', exact: true }) });
  await expect(depth).toContainText('120 m');
  await expect(depth).toContainText('305 m');
  await expect(
    table
      .getByRole('row')
      .filter({ has: page.getByRole('cell', { name: 'Payload', exact: true }) }),
  ).toContainText('500 kg');
});

test('catalog comparison stays selected when search renders a different set of cards', async ({
  page,
}) => {
  await page.goto('/?q=PHOTON');
  await page.getByRole('button', { name: 'Compare PHOTON', exact: true }).click();
  await page.locator('#searchInput').fill('PIVOT');
  await page.getByRole('button', { name: 'Compare PIVOT', exact: true }).click();
  await expect(page.locator('#compareBarCount')).toHaveText('2');
  await page.locator('#searchInput').fill('PHOTON');
  await expect(page.getByRole('button', { name: 'Compare PHOTON', exact: true })).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  await page.locator('#compareBarBtn').click();
  const depth = page
    .locator('#compareTableContainer')
    .getByRole('row')
    .filter({ has: page.getByRole('cell', { name: 'Depth rating', exact: true }) });
  await expect(depth).toContainText('120 m');
  await expect(depth).toContainText('305 m');
});

test('aircraft comparison distinguishes takeoff mass, aircraft weight and flight endurance', async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'en');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify(['quantum-systems-twister', 'skydio-x10']),
    );
  });
  await page.goto('/robot/quantum-systems-twister/');
  await expect(page.locator('[data-spec-key="flightTime"]')).toContainText('90 minutes');
  await expect(page.locator('[data-spec-key="maxTakeoffWeight"]')).toHaveText('3.8 kg');
  await expect(page.locator('[data-spec-key="weight"]')).toHaveCount(0);
  await expect(page.locator('[data-spec-key="batteryLife"]')).toHaveCount(0);
  const properties = await page
    .locator('script[type="application/ld+json"]')
    .evaluateAll(
      (scripts) =>
        scripts
          .map((script) => JSON.parse(script.textContent))
          .find((entry) => entry['@type'] === 'Product').additionalProperty,
    );
  expect(properties).toContainEqual({
    '@type': 'PropertyValue',
    name: 'Maximum takeoff mass',
    value: '3.8 kg',
  });
  await page.locator('#compareBarBtn').click();
  const table = page.locator('#compareTableContainer');
  const row = (label) =>
    table.getByRole('row').filter({ has: page.getByRole('cell', { name: label, exact: true }) });
  await expect(row('Maximum takeoff mass')).toContainText('3.8 kg');
  await expect(row('Maximum takeoff mass')).toContainText('2.49 kg');
  await expect(row('Weight')).toContainText('2.11 kg');
  await expect(row('Weight')).not.toContainText('3.8 kg');
  await expect(row('Flight time')).toContainText('90 minutes');
  await expect(row('Flight time')).toContainText('40 minutes');
  await expect(row('Battery Life')).toHaveCount(0);
});
