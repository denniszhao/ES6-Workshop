## Building ES6 

In this part of the workshop, we'll go over how to use an ES6 transpiler as a part of a build system.

We'll use [Babel](http://babeljs.io) as our ES6 to ES5 transpiler because it was mentioned earlier and because it's pretty widely supported by build systems (e.g. Gulp, Broccoli, Browserify). 

We'll use [gulp.js](http://gulp.js) as our build system, mostly because it's the one I have the most experience with. gulp.js is just [one of *many* supported build systems](https://babeljs.io/docs/using-babel/#build-systems) though, so feel free to replace it with whatever you wish. 