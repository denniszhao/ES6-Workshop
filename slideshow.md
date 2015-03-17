title: "[H@B] ES6, the future of JavaScript"
author:
  name: "Dennis Zhao"
  twitter: "@probablyafish"
  email: denniszhao@berkeley.edu

output: slides.html
controls: false

--

### H@B: ES6, the future of JavaScript
Dennis Zhao, @probablyafish 

--

## The History of JavaScript

- "Created in 10 days" by Brendan Eich at Netscape
- Language of the web!
- The web moved quickly.. while the language did not. 

--

## Arrows

- Arrows provide a shorthand for declaring anonymous functions. 
- Unlike the `function () {}` declaration that we're used to, arrow functions share the same `this` as their surrounding code. 

```
(function () {
  this.n = 10;
  setTimeout(function () {
      console.log(this.n); // ???
  }, 1000);
})();
```

```
(function () {
  this.nn = 10;
  setTimeout(=> 
      console.log(this.n); // 10
  );
});
```

--

## Arrows in practice

Great for event handling! Right now we have to do this: 
```
var self = this;
btn.on('click', function (e) {
    e.preventDefault();
    self.numClicks++;
});
```

or this...
```
btn.on('click', function () {
   e.preventDefault();
   this.numClicks++;
}.bind(this));
```

Now we can do this!
```
btn.on('click', e => {
    e.preventDefault();
    this.numClicks++;
})
```

Wow so much easier, wow so clean. 

--

## Classes

Other methods have long existed for writing classes in JavaScript, but with ES6 we finally have support from the language itself. 

```
class Animal {
    constructor(name) {
        this.name = name;
    }

    bark() {
        console.log(this.name);
    }
}

class Dog extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
}

var d = new Dog("Doggy");
d.bark(); // "Doggy"
```
--

## Default parameters

We have a workaround for default parameters right now by checking the parameter passed in, but it's much nicer to have actual support for default parameters!

```
function f_es5(x) {
    x = x ? x : 15;

    console.log(x);
}

function f_es6(x=15) {
    console.log(x);
}

f_es5(); // 15
f_es5(10); // 10

f_es6(); // 15
f_es6(10); // 10
```

--

## Let + Const

- `let` allows you to have block-scoped variables. 
- `const` lets you declare constants!

```
function f() {
    let x = 5;
    {
        const x = "hello"; 
        x = "hi"; // Error, const
    }
}
```

--

## Modules 

A lot of really smart people have built smart work-arounds since JavaScript doesn't have built-in support for modules. 
  
- CommonJS: most common (e.g. node.js), Synchronous loading (evaluated at compilation)
- AMD: most common on the browser (e.g. require.js), asynchronous loading

--

## Modules (differences between the two)

ES6 has support for named exports. 

```
// lib.js
export const one = 1;
export const two = 2;
export function square(x) { return x * x; }
```

```
// app.js
import { square, one, two } from "lib";
console.log(square(two)); // 4
```

And in CommonJS?

```
// lib.js
function square(x) { return x * x; }
module.exports = {
  one: 1,
  two: 2,
  square: square
};
```

```
var lib = require('lib');
console.log(lib.square(lib.two));
```

--

Basic use case:
```
// lib/sum.js
export default sum(x, y) { return x + y; };
```

```
// test.js
import sum from "./lib/sum";
console.log(sum(1, 2));
```

--

## More data structures!

- ES6 will have support for Map, Set, WeakMap, and WeakSet
- The difference between Maps and Objects are that Maps' keys don't have to be strings.

```
var s = new Set();
s.add(1).add(2).add(1);
console.log(s.size); // 2
```

```
var m = new Map();
m.set("dennis", 20);
m.set("H@B", "cool");
```

-- 

## Proxies

Proxies can be used to intercept operations on objects. 

Example from ES6 spec:
```
var o = {};
var handler = {
    get: function (receiver, name) {
        return `Hello, ${name}!`;
    }
};

var p = new Proxy(o, handler);
console.log(p.world); // "Hello, world";
```

--

## So much more!

There's a ton more that I haven't talked about today...
- Template strings
- Destructuring 
- Iterators, generators
- Symbols

--

## Using ES6 syntax today!

- Babel is an awesome 6to5 transpiler that takes your ES6 code and turns it into ES5-compatible code. 

https://babeljs.io/

```
babel [file] -o [output file]
```

```
node [output file]
```

--

## Babel as a build process

--

## More ES6 resources

- https://babeljs.io/docs/learn-es6/
- https://github.com/lukehoban/es6features