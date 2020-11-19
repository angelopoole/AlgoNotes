Pure functions
--------------

Just because your program contains functions does not necessarily mean that you are doing functional programming. Functional programming distinguishes between pure and impure functions. It encourages you to write pure functions. A pure function must satisfy both of the following properties:

-   **Referential transparency:** The function always gives the same return value for the same arguments. This means that the function cannot depend on any mutable state.
-   **Side-effect free:** The function cannot cause any side effects. Side effects may include I/O (e.g., writing to the console or a log file), modifying a mutable object, reassigning a variable, etc.

Let's illustrate with a few examples. First, the **multiply** function is an example of a pure function. It always returns the same output for the same input, and it causes no side effects.

|  | function multiply(a, b) { |
|  | return a * b; |
|  | } |

[view raw](https://gist.github.com/battmanz/62fa0a78841aa0fe29d99e80ba8db2b1/raw/fd586c5da7c936235a6d99b11cb80c9c67e4deaf/pure-function-example.js)[pure-function-example.js](https://gist.github.com/battmanz/62fa0a78841aa0fe29d99e80ba8db2b1#file-pure-function-example-js) hosted with ❤ by [GitHub](https://github.com/)

The following are examples of impure functions. The **canRide** function depends on the captured **heightRequirement** variable. Captured variables do not necessarily make a function impure, but mutable (or re-assignable) ones do. In this case it was declared using **let**, which means that it can be reassigned. The **multiply** function is impure because it causes a side-effect by logging to the console.

|  | let heightRequirement = 46; |
|  |  |
|  | // Impure because it relies on a mutable (reassignable) variable. |
|  | function canRide(height) { |
|  | return height >= heightRequirement; |
|  | } |
|  |  |
|  | // Impure because it causes a side-effect by logging to the console. |
|  | function multiply(a, b) { |
|  | console.log('Arguments: ', a, b); |
|  | return a * b; |
|  | } |

[view raw](https://gist.github.com/battmanz/459c13138ea8e333fc6603ae688b7992/raw/ceda8a5c36c5bde69d4000b6ecb8fee98c9edcd3/impure-functions.js)[impure-functions.js](https://gist.github.com/battmanz/459c13138ea8e333fc6603ae688b7992#file-impure-functions-js) hosted with ❤ by [GitHub](https://github.com/)

The following list contains several built-in functions in JavaScript that are impure. Can you state which of the two properties each one does not satisfy?

-   **console.log**
-   **element.addEventListener**
-   **Math.random**
-   **Date.now**
-   **$.ajax** (where **$** == the Ajax library of your choice)

Living in a perfect world in which all our functions are pure would be nice, but as you can tell from the list above, any meaningful program will contain impure functions. Most of the time we will need to make an Ajax call, check the current date, or get a random number. A good rule of thumb is to follow the 80/20 rule: 80% of your functions should be pure, and the remaining 20%, of necessity, will be impure.

There are several benefits to pure functions:

-   They're easier to reason about and debug because they don't depend on mutable state.
-   The return value can be cached or "memoized" to avoid recomputing it in the future.
-   They're easier to test because there are no dependencies (such as logging, Ajax, database, etc.) that need to be mocked.

If a function you're writing or using is void (i.e., it has no return value), that's a clue that it's impure. If the function has no return value, then either it's a no-op or it's causing some side effect. Along the same lines, if you call a function but do not use its return value, again, you're probably relying on it to do some side effect, and it is an impure function.