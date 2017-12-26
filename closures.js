/*
When a function is called, a scope is created during the execution of that function then it goes away.
Global scope does not go away as long as the application is running.
A closure is created when a function is defined (not executed).

In the following example, there are two closures 'functionA' and 'functionB'.
When we define 'functionB', its created closure will allow us to access 'functionB' own scope as well 'functionA' scope, plus the global scope.
When we define 'functionA', its created closure will allow us to access 'functionA' own scope, plus the global scope BUT not 'functionB' scope.

So whenever we access 'functionB', it will have access to variable B, A and G.
However, 'functionA' will not have access to variable B.

Closure does not give us a copy of variable but a reference to them.
*/

var G = 'G';

// Define a function and create a closure
function functionA() {
  var A = 'A'

  // Define a function and create a closure
  function functionB() {
    var B = 'B'
    console.log(A, B, G);
  }

  functionB();

  A = 42;
  functionB();
  
  G = 'X';
  functionB();
}

functionA();