Functional programming is the form of programming that attempts to avoid changing state and mutable data. In a functional program, the output of a function should always be the same, given the same exact inputs to the function.

This is because the outputs of a function in functional programming purely relies on arguments of the function, and there is no "magic" that is happening behind the scenes. This is called eliminating 'side effects' in your code

https://opensource.com/article/17/6/functional-javascript has a good example of how you would functionally program.

Functional programming distinguishes between pure and impure functions, it Encourages you to write pure functions.

A pure function must satisfy the following properties ->
	1. Referential transparency: The function always gives the same return value for the same arguments. This means that the function cannot depend on any mutable state
	2. Side-effect free: The function cannot cause and side effects. Side effects may include I/O (e.g, writing to the console or a log file), modifying a mutable object, reassining a variable, etc. 
Here are a few examples. 

First, the multiply function is an example of a pure function. It always returns the same output for the same input, and it causes no side effects. 

function multiply(a, b) {	
	return a * b;
	}

It returns the sum without changing the original variables that were outputted. It also doesn’t change or assign a variable that’s not in local scope. 

The following are examples of IMPURE FUNCTIONS. 
The canRide function depends on the captured heightRequirement Variable. Captured variables do not necessarily make a function impure, but mutable (or re-assignable) ones do. In this case it was declared using let, which means that it can be reassigned. The multiply function is impure because it causes a side-effect by logging to the console.   

let heightRequirement = 46;
// Impure because it relies on a mutable (reassignable) variable.
function canRide(height) {
  return height >= heightRequirement;
}
// Impure because it causes a side-effect by logging to the console.
function multiply(a, b) {
  console.log('Arguments: ', a, b);
  return a * b;
}


