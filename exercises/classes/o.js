"use strict";

/**
 *  Convert the following ES5 code to use new ES6 features! 
 */

var Animal = function Animal(name) {
    this.name = name;

    this.bark = function () {
        console.log(this.name);
    };
};

var a = new Animal("hi");

a.bark();
