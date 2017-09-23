casper.test.begin('Testing IATDG Home Page', 5, function(test) {
    casper.options.viewportSize = { width: 1280, height: 800 };
    
    casper.start('http://iatdg.org/', function() {
      this.echo('In home page');
      test.assertVisible('body');
      test.assertSelectorHasText('#menu-item-16 > a', 'Home');
      
    });
  
    casper.then(function() {
      test.assertTitle('IATDG');
      casper.capture('home.png');
      
    });

    casper.then(function(){
      casper.waitTimeout=60000;
      this.echo('clicking about page');
      this.click('#menu-item-17 > a');
      
      this.echo('about page opened succesfully');
      test.assertVisible('body');
      test.assertTitle('IATDG');
      casper.capture('about.png');
    });

  
    casper.run(function() {
      test.done();
    });
  });