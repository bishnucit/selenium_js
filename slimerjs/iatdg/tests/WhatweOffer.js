casper.test.begin('Testing IATDG What We Offer Page', 3, function(test) {
    casper.options.viewportSize = { width: 1280, height: 800 };
    
    casper.start('http://iatdg.org/what-we-offer/', function() {
      this.echo('In what we offer page');
     
    });
  
    casper.then(function(){
      this.echo('what we offer page opened succesfully');
      test.assertVisible('body');
      test.assertTitle('What we offer – IATDG');
      casper.capture('whatweoffer.png');

      this.echo(casper.fetchText('body > div.main > section.off-white.gravida-diam.wow.fadeInUp > div > div > h4:nth-child(2)') + " is visibile in the page");

      this.echo(casper.fetchText('body > div.main > section.off-white.gravida-diam.wow.fadeInUp > div > div > h4:nth-child(4)') + " is visibile in the page");

      this.echo(casper.fetchText('body > div.main > section.off-white.gravida-diam.wow.fadeInUp > div > div > h4:nth-child(6)') + " is visibile in the page");

      this.echo(casper.fetchText('body > div.main > section.off-white.gravida-diam.wow.fadeInUp > div > div > h4:nth-child(8)') + " is visibile in the page");
      
      this.echo(casper.fetchText('body > div.main > section.off-white.gravida-diam.wow.fadeInUp > div > div > h4:nth-child(10)') + " is visibile in the page");
      
      this.echo(casper.fetchText('body > div.main > section.off-white.gravida-diam.wow.fadeInUp > div > div > h4:nth-child(12)') + " is visibile in the page");
      
      this.echo(casper.fetchText('body > div.main > section.off-white.gravida-diam.wow.fadeInUp > div > div > h4:nth-child(14)') + " is visibile in the page");

      test.assertVisible('body > div.main > section.what-we-offer-page.wow.fadeInUp > div > div > div > h2');

      this.echo("Our benefits text is visible")
    });

  
    casper.run(function() {
      test.done();
    });
  });