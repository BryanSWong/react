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

  'Test 3: Logo image existence': (browser) => {
    browser
      .assert.visible('#logo', 'Verify the existence of the logo.')
      //.end();
  },

  'Test 4: User field existence': (browser) => {
    browser.assert.visible('#username', 'Verify the existence of user field.')
      //.end();
  },

  'Test 5: Password field existence': (browser) => {
    browser.assert.visible('#password', 'Verify the existence of password field.')
      //.end();
  },

  'Test 6: Submit button existence': (browser) => {
    const locator = '#submit';
    const buttonName = 'Log In';
    browser
      .assert.visible(locator, 'Verify the existence of submit button.')
      .assert.value(locator, buttonName, `Verify that the text inside the button is '${buttonName}'.`)
      .end();
  }

};