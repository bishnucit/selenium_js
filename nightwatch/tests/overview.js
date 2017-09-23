

module.exports = {
    'Overview Page' : function (client) {
        client
        .login("your_username", "your_password")
         
        .waitForElementVisible('#bs-example-navbar-collapse-1 > ul > li:nth-child(1) > a', 5000)
        .end();
    }
  };