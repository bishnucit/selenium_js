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
      this.echo(casper.fetchText('body > div.main > section.about-us-area.wow.fadeInUp > div > div > div.about-us-area-4box > div:nth-child(1) > div > div > div > div > h6') + " is visible in the page");
      this.echo(casper.fetchText('body > div.main > section.about-us-area.wow.fadeInUp > div > div > div.about-us-area-4box > div:nth-child(2) > div > div > div > div > h6') + " is visible in the page");
      this.echo(casper.fetchText('body > div.main > section.about-us-area.wow.fadeInUp > div > div > div.about-us-area-4box > div:nth-child(3) > div > div > div > div > h6') + " is visible in the page");
      this.echo(casper.fetchText('body > div.main > section.about-us-area.wow.fadeInUp > div > div > div.about-us-area-4box > div:nth-child(4) > div > div > div > div > h6') + " is visible in the page");

      this.echo(casper.fetchText('body > div.main > section.about-us-area.wow.fadeInUp > div > div > div.about-us-area-4box > div:nth-child(4) > div > div > div > div > h6') + " is visible in the page");
      
      this.echo(casper.fetchText('body > div.main > section.great-guides-area.wow.fadeInUp > div > div > div.right-side > div > div > div:nth-child(1) > div > h6') + " is visible in the page");
      this.echo(casper.fetchText('body > div.main > section.great-guides-area.wow.fadeInUp > div > div > div.right-side > div > div > div:nth-child(2) > div > h6') + " is visible in the page");
      this.echo(casper.fetchText('body > div.main > section.great-guides-area.wow.fadeInUp > div > div > div.right-side > div > div > div:nth-child(3) > div > h6') + " is visible in the page");


      this.echo(casper.fetchText('body > div.main > section.real-guides.wow.fadeInUp > div > div > div > h3') + " is visible in the page");
      

      this.echo(casper.fetchText('body > div.main > section.perfect-trip-area > div > div > div > div:nth-child(2) > h2') + " is visible in the page");
      this.echo(casper.fetchText('body > div.main > section.perfect-trip-area > div > div > div > div:nth-child(1) > div.chats.wow.fadeInLeft > div > p') + " is visible in the page");
      this.echo(casper.fetchText('body > div.main > section.perfect-trip-area > div > div > div > div:nth-child(1) > div.chats1.wow.fadeInLeft > div > p') + " is visible in the page");
      this.echo(casper.fetchText('body > div.main > section.perfect-trip-area > div > div > div > div:nth-child(2) > p') + " is visible in the page");
      this.echo(casper.fetchText('body > div.main > section.found-perfect-guide-area > div > div > div > h3') + " is visible in the page");
      this.echo(casper.fetchText('body > div.main > section.experience-area.wow.fadeInUp > div > div > h2') + " is visible in the page");

      
     
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