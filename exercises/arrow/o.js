

/**
 *  Convert the following ES5 code to use new ES6 features! 
 */

(function () {
    // IIFE so we have a 'this' context

    var self = this;
    this.num = 100;

    var cb = (function () {
        console.log(this.num);
    }).bind(this);

    setTimeout(cb, 300);

    var nums = [1, 2, 3];

    /**
     *  Squares an array of numbers. 
     */
    function square(nums) {
        return nums.map(function (n) {
            return n * n;
        });
    }

    var squared = square(nums);

    console.log(squared);
})();
