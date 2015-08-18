
module.exports = {

		  'Demo test Emsfile' : function (client) {
    client
      .url('http://localhost:5023/EmployeeApplicationSprint4-1.0-SNAPSHOT/home.htm')
      .waitForElementVisible('body', 1000)
      .assert.title('Employee Application')
      .click('#ListEmployeeLink')
      .pause(1000)
	  .getText("body > div.smart-green > table > tbody > tr:nth-child(11) > td:nth-child(2)", function(result) {
		  this.assert.equal(result.value, "abhijeet")
		  })
	  .click('body > div.smart-green > table > tbody > tr:nth-child(11) > td:nth-child(5) > a')
	  .pause(2000)
	.waitForElementVisible('body > div.smart-green > table > tbody > tr:nth-child(11) > td:nth-child(2)) ', 1000, false, function() {}, 'elemento %s no era visible en %d ms')
     .pause(5000)
      //.end();
  }
};

