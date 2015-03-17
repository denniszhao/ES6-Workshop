/**
 *  Convert the following ES5 code to use new ES6 features! 
 */

(function () {
    // IIFE so we have a 'this' context

    /**
     *  This chunk of code should define a function square that squares an
     *  array passed in, then logs the squared array. 
     */
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
    console.log(squared); // should be nums squared


    /**
     *  This chunk of code should print out this.num 300 ms later. 
     */
    var self = this;
    this.num = 100;

    var cb = function () {
        console.log(this.num);
    }.bind(this);

    setTimeout(cb, 300);


})();