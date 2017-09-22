casper.test.begin('Testing Amazon Search and Results pages', 1, function(test) {
    casper.start('http://amazon.com', function() {
      this.fill('#nav-search > form', {
        'field-keywords': 'javascript'
      }, true);
    });
  
    casper.then(function() {
      test.assertTitle('Amazon.com: javascript', 'Amazon search results page doesnt have expected title');
    });
  
    casper.run(function() {
      test.done();
    });
  });