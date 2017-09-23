

module.exports = {
    'Overview Page' : function (client) {
        client
        .login("your_username", "your_password")
         
        .click('#bs-example-navbar-collapse-1 > ul > li:nth-child(2) > a')
        .pause(1000)
        .waitForElementVisible('#new_tester_hub > div.col-md-1.col-sm-12.col-xs-12.col-lg-1 > a > img', 5000)

        .end();
    }
  };