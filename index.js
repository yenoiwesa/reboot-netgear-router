const puppeteer = require('puppeteer');

async function login(browser) {
    const username = process.env.NETGEAR_USERNAME || 'admin';
    const password = process.env.NETGEAR_PASSWORD || 'password';

    const page = await browser.newPage();
    await page.authenticate({ username, password });
    await page.goto('http://www.routerlogin.com');
    return page;
}

async function waitForAndClick(page, selector) {
    await page.waitForSelector(selector);
    return page.click(selector);
}

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await login(browser);

    // go to the advance settings tab
    await waitForAndClick(page, '#AdvanceTab');

    // confirm reboot when it popups
    const confirmReboot = new Promise(resolve => {
        page.on('dialog', async dialog => {
            await dialog.accept();
            resolve();
        });
    });

    // click the reboot button in the iframe
    const frame = await page.frames().find(frame => frame.name() === 'page2');
    await waitForAndClick(frame, '#reboot');

    await confirmReboot;
    await frame.waitForNavigation();

    await browser.close();
})();
