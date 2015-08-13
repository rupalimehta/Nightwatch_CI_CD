module.exports = {
  'step one' : function (browser) {
    browser
      .url('http://localhost:5023/EmployeeApplicationSprint4-1.0-SNAPSHOT%20-%20Copy/home.htm')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000)
  },

  'step two' : function (browser) {
    browser
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};