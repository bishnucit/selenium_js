var assert = buster.referee.assert;
buster.testCase("Slow test", {
    setUp: function () {
        this.timeout = 3000;
    },

    "is a slow test": function (done) {
        assert(true);
        setTimeout(done, 1200);
    },

    "is another slow test": function (done) {
        assert(true);
        setTimeout(done, 1200);
    },

    "is a really fast ": function () {
        assert(true);
    },

});