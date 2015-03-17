/**
 *  Convert the following ES5 code to use new ES6 features! 
 */


/**
 *  Evaluates n^e. 
 *
 *  Returns 0 if n not defined.
 *  Returns n if e not defined.
 */
function exp(n, e) {
    n = n ? n : 0;
    e = e ? e : 1;

    return Math.pow(n, e);
}

console.log(exp(2, 2)); // Should be 4
console.log(exp(5)); // Should be 5
console.log(exp()); // Should be 0
