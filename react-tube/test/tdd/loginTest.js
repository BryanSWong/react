const buttonLocator = '#submit';
const errorLocator = '#error_block';
const usernameLocator = '#username';
const passwordLocator =  '#password';
const successLocator = '#success';

module.exports = {

    beforeEach: (browser) => {
        browser
            .url('http://localhost:3000/')
            .waitForElementVisible('body', 'React Tube page load.')
    },

    'Test 1: Page load': (browser) => {
        browser
            .assert.title('React Tube')
        //.end();
    },

    'Test 2 : Page header existence': (browser) => {
        const locator = 'div > header > h1';
        browser
            .waitForElementPresent(locator)
            .waitForElementVisible(locator)
            .expect.element(locator).text.to.equal('Welcome to React Tube')
        //.end();
    },

    'Test 3: Form title existence': (browser) => {
        const locator = '#formTitle';
        browser
            .waitForElementPresent(locator)
            .waitForElementVisible(locator)
            .expect.element(locator).text.to.equal('Sign In')
    },

    'Test 4: Logo image existence': (browser) => {
        browser
            .assert.visible('#logo', 'Verify the existence of the logo.')
        //.end();
    },

    'Test 5: User field existence': (browser) => {
        browser.assert.visible('#username', 'Verify the existence of user field.')
        //.end();
    },

    'Test 6: Password field existence': (browser) => {
        browser.assert.visible('#password', 'Verify the existence of password field.')
        //.end();
    },

    'Test 7: Submit button existence': (browser) => {
        const buttonName = 'Log In';
        browser
            .assert.visible(buttonLocator, 'Verify the existence of submit button.')
            .assert.value(buttonLocator, buttonName, `Verify that the text inside the button is '${buttonName}'.`)
            //.end();
    },

    'Test 8: Attempt to login with invalid credentials and verify the error': (browser) => {

        const user = 'Bryan';
        const pass = 'password';
        browser
            .setValue(usernameLocator, user)
            .setValue(passwordLocator, pass)
            .click(buttonLocator)
            .waitForElementPresent(errorLocator)
            .waitForElementVisible(errorLocator)
            .expect.element(errorLocator).text.to.equal('Invalid login credentials detected, please enter the correct ones.');
    },

    'Test 9: Login with correct credentials': (browser) => {
        const user = 'admin';
        const pass = 'admin';
        browser.setValue(usernameLocator, user)
            .setValue(passwordLocator, pass)
            .click(buttonLocator)
            .waitForElementPresent(successLocator)
            .waitForElementVisible(successLocator)
            .expect.element(successLocator).text.to.equal('Success')
            .end();
    }

};