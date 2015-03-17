/**
 *  Convert the following ES5 code to use new ES6 features! 
 */

var Animal = function Animal(name) {
    this.name = name;
    Animal.numAnimals += 1; // This is a bad/easy way of doing a static variable

    this.bark = function () {
        console.log(this.name);
    }
}

Animal.numAnimals = 0;
Animal.printNumAnimals = function () {
    console.log(Animal.numAnimals);
};

var a = new Animal("AAA");
var b = new Animal("BBB");
a.bark();

console.log(Animal.numAnimals);