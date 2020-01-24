const { Builder, By, Key, until } = require('selenium-webdriver');
const by = require('./data');

const rootUrl = "http://thedemosite.co.uk/";

let driver;

let randomUser;
let randomPass;

beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get(rootUrl);
    randomUser = "user" + Math.floor(Math.random() * 10000);
    randomPass = "pass" + Math.floor(Math.random() * 10000);
});

afterAll(async () => {
    await driver.quit();
});

test("Should be able to add user", async () => {
    await driver.findElement(By.linkText(by.linkText.nav_addUser)).click();
    expect(await driver.getTitle()).toBe("Add a user - FREE PHP code and SQL");
    await driver.findElement(By.xpath(by.xpath.addUser_usernameField)).sendKeys(randomUser);
    await driver.findElement(By.xpath(by.xpath.addUser_passwordField)).sendKeys(randomPass);
    await driver.findElement(By.xpath(by.xpath.addUser_saveBtn)).click();
    expect(await driver.findElement(By.xpath(by.xpath.addUser_output)).getText()).toContain(" " + randomUser);
    expect(await driver.findElement(By.xpath(by.xpath.addUser_output)).getText()).toContain(" " + randomUser);
});

test("Should login with good login info", async () =>{
    await driver.findElement(By.linkText(by.linkText.nav_login)).click();
    expect(await driver.getTitle()).toBe("Login example page to test the PHP MySQL online system");
    expect(await driver.findElement(By.css(by.css.login_output)).getText()).toBe("**No login attempted**");
    await driver.findElement(By.css(by.css.login_usernameField)).sendKeys(randomUser);
    await driver.findElement(By.css(by.css.login_passwordField)).sendKeys(randomPass);
    await driver.findElement(By.css(by.css.login_loginBtn)).click();
    expect(await driver.findElement(By.css(by.css.login_output)).getText()).toBe("**Successful Login**");
});

test("Should NOT login with bad login info", async () =>{
    await driver.findElement(By.linkText(by.linkText.nav_login)).click();
    expect(await driver.getTitle()).toBe("Login example page to test the PHP MySQL online system");
    expect(await driver.findElement(By.css(by.css.login_output)).getText()).toBe("**No login attempted**");
    await driver.findElement(By.css(by.css.login_usernameField)).sendKeys(randomUser+"q");
    await driver.findElement(By.css(by.css.login_passwordField)).sendKeys(randomPass+"q");
    await driver.findElement(By.css(by.css.login_loginBtn)).click();
    expect(await driver.findElement(By.css(by.css.login_output)).getText()).toBe("**Failed Login**");
});

test("Should NOT login no info", async () =>{
    await driver.findElement(By.linkText(by.linkText.nav_login)).click();
    expect(await driver.getTitle()).toBe("Login example page to test the PHP MySQL online system");
    expect(await driver.findElement(By.css(by.css.login_output)).getText()).toBe("**No login attempted**");
    await driver.findElement(By.css(by.css.login_loginBtn)).click();
    await driver.switchTo().alert().accept();
    expect(await driver.findElement(By.css(by.css.login_output)).getText()).toBe("**No login attempted**");
});

test("Should NOT login with no username", async () =>{
    await driver.findElement(By.linkText(by.linkText.nav_login)).click();
    expect(await driver.getTitle()).toBe("Login example page to test the PHP MySQL online system");
    expect(await driver.findElement(By.css(by.css.login_output)).getText()).toBe("**No login attempted**");
    await driver.findElement(By.css(by.css.login_passwordField)).sendKeys(randomPass);
    await driver.findElement(By.css(by.css.login_loginBtn)).click();
    await driver.switchTo().alert().accept();
    expect(await driver.findElement(By.css(by.css.login_output)).getText()).toBe("**No login attempted**");
});

test("Should NOT login with no password", async () =>{
    await driver.findElement(By.linkText(by.linkText.nav_login)).click();
    expect(await driver.getTitle()).toBe("Login example page to test the PHP MySQL online system");
    expect(await driver.findElement(By.css(by.css.login_output)).getText()).toBe("**No login attempted**");
    await driver.findElement(By.css(by.css.login_usernameField)).sendKeys(randomUser);
    await driver.findElement(By.css(by.css.login_loginBtn)).click();
    await driver.switchTo().alert().accept();
    expect(await driver.findElement(By.css(by.css.login_output)).getText()).toBe("**No login attempted**");
});
