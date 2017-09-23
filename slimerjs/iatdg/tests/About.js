casper.test.begin('Testing IATDG About Page', 3, function(test) {
    casper.options.viewportSize = { width: 1280, height: 800 };
    
    casper.start('http://iatdg.org/about-us/', function() {
      this.echo('In about page');
     
    });
  
    casper.then(function(){
      this.echo('about page opened succesfully');
      test.assertVisible('body');
      test.assertTitle('About us – IATDG');
      casper.capture('about.png');

      if (this.resourceExists("http://iatdg.org/wp-content/uploads/2016/05/faye-brenner-img.jpg"))
        this.echo("Person 1 pic is visible");

      if (this.resourceExists("http://iatdg.org/wp-content/uploads/2016/05/D.R.-300x300.jpg"))
        this.echo("Person 2 pic is visible");

      if (this.resourceExists("http://iatdg.org/wp-content/uploads/2016/05/von-harden-img-300x214.jpg"))
        this.echo("Person 3 pic is visible");  
        
      if (this.resourceExists("http://iatdg.org/wp-content/uploads/2016/05/hillary-campbell-johnson-img-300x288.jpg"))
        this.echo("Person 4 pic is visible");  

        if (this.resourceExists("http://iatdg.org/wp-content/uploads/2016/05/daniel-slater-img-202x300.jpg"))
        this.echo("Person 5 pic is visible");

      if (this.resourceExists("http://iatdg.org/wp-content/uploads/2016/05/Art1-280x300.jpg"))
        this.echo("Person 6 pic is visible");

      if (this.resourceExists("http://iatdg.org/wp-content/uploads/2016/05/mary-ellen-pauli-img-300x225.jpg"))
        this.echo("Person 7 pic is visible");
        
      if (this.resourceExists("http://iatdg.org/wp-content/uploads/2016/05/paul-sirner-img-300x300.jpg"))
        this.echo("Person 8 pic is visible");

        if (this.resourceExists("http://iatdg.org/wp-content/uploads/2016/05/ken-thompson-232x300.png"))
        this.echo("Person 9 pic is visible");

      if (this.resourceExists("http://iatdg.org/wp-content/uploads/2016/05/MitchBach-fullsize-002-225x300.jpg"))
        this.echo("Person 10 pic is visible");


      this.echo(casper.fetchText('body > div.main > section.off-white.why-we-exist.wow.fadeInLeft > div > div > h4') + " is visibile in the page");

      this.echo(casper.fetchText('body > div.main > section.mission-vision-area > div > div > div.mission-vision-area-box-main > div') + " is visibile in the page");
      
      this.echo(casper.fetchText('body > div.main > section.off-white.our-story-evolution.wow.fadeInRight > div > div > h4') + " is visibile in the page");

      test.assertVisible('body > div.main > section.experience-area.wow.fadeInUp > div > div > a');



      this.echo("join here button is visible")
    });

  
    casper.run(function() {
      test.done();
    });
  });