casper.test.begin('Open amazon and search iphone 7 in the search box and validate results', 4, function suite(test) {
    casper.start("https://www.amazon.com/", function() {
        test.assertTitle("Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more", "amazon homepage title is the one expected");
        test.assertExists('#twotabsearchtextbox', "search form is found");
        this.sendKeys('#twotabsearchtextbox', "iPhone 7");
        this.click('#nav-search > form > div.nav-right > div > input');
        this.waitForResource("https://images-na.ssl-images-amazon.com/images/I/41xPMwRnmCL._AC_US218_.jpg", function() {
            this.echo('https://images-na.ssl-images-amazon.com/images/I/41xPMwRnmCL._AC_US218_.jpg has been loaded.');
        });
    });

    casper.then(function() {
        test.assertTitle("Amazon.com: iPhone 7", "amazon title is ok");
        //test.assertUrlMatch(/q=casperjs/, "search term has been submitted");
        test.assertEval(function() {
            return __utils__.findAll("h2").length >= 10;
        }, "amazon search for iphone 7 retrieves 10 or more results");
    });
 
    casper.run(function() {
        test.done();
    });
});


