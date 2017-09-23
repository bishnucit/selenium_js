
exports.command = function(username, password) {
  this
    .url('https://99tests.com/signin')
    .setValue('#email', username)
    .setValue('#password', password)
    .click('#signin_btn')
    .assert.containsText('#main_container > div:nth-child(3) > div:nth-child(4) > div > div', 'My Dashboard')
    

return this;
};