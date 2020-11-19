Immutability
Let's return to the concept of captured variables. Above, we looked at the canRide function. We decided that it is an impure function, because the heightRequirement could be reassigned. Here is a contrived example of how it can be reassigned with unpredictable results:

let heightRequirement = 46;

function canRide(height) {
  return height >= heightRequirement;
}

// Every half second, set heightRequirement to a random number between 0 and 200.
setInterval(() => heightRequirement = Math.floor(Math.random() * 201), 500);

const mySonsHeight = 47;

// Every half second, check if my son can ride.
// Sometimes it will be true and sometimes it will be false.
setInterval(() => console.log(canRide(mySonsHeight)), 500);
view rawmutable-state.js hosted with ❤ by GitHub
Let me reemphasize that captured variables do not necessarily make a function impure. We can rewrite the canRide function so that it is pure by simply changing how we declare the heightRequirement variable.

const heightRequirement = 46;

function canRide(height) {
  return height >= heightRequirement;
}
view rawimmutable-state.js hosted with ❤ by GitHub
Declaring the variable with const means that there is no chance that it will be reassigned. If an attempt is made to reassign it, the runtime engine will throw an error; however, what if instead of a simple number we had an object that stored all our "constants"?

const constants = {
  heightRequirement: 46,
  // ... other constants go here
};

function canRide(height) {
  return height >= constants.heightRequirement;
}
view rawcaptured-mutable-object.js hosted with ❤ by GitHub
We used const so the variable cannot be reassigned, but there's still a problem. The object can be mutated. As the following code illustrates, to gain true immutability, you need to prevent the variable from being reassigned, and you also need immutable data structures. The JavaScript language provides us with the Object.freeze method to prevent an object from being mutated.

'use strict';

// CASE 1: The object is mutable and the variable can be reassigned.
let o1 = { foo: 'bar' };

// Mutate the object
o1.foo = 'something different';

// Reassign the variable
o1 = { message: "I'm a completely new object" };


// CASE 2: The object is still mutable but the variable cannot be reassigned.
const o2 = { foo: 'baz' };

// Can still mutate the object
o2.foo = 'Something different, yet again';

// Cannot reassign the variable
// o2 = { message: 'I will cause an error if you uncomment me' }; // Error!


// CASE 3: The object is immutable but the variable can be reassigned.
let o3 = Object.freeze({ foo: "Can't mutate me" });

// Cannot mutate the object
// o3.foo = 'Come on, uncomment me. I dare ya!'; // Error!

// Can still reassign the variable
o3 = { message: "I'm some other object, and I'm even mutable -- so take that!" };


// CASE 4: The object is immutable and the variable cannot be reassigned. This is what we want!!!!!!!!
const o4 = Object.freeze({ foo: 'never going to change me' });

// Cannot mutate the object
// o4.foo = 'talk to the hand' // Error!

// Cannot reassign the variable
// o4 = { message: "ain't gonna happen, sorry" }; // Error
view rawimmutability-vs-reassignment.js hosted with ❤ by GitHub
Immutability pertains to all data structures, which includes arrays, maps, and sets. That means that we cannot call mutator methods such as array.prototype.push because that modifies the existing array. Instead of pushing an item onto the existing array, we can create a new array with all the same items as the original array, plus the one additional item. In fact, every mutator method can be replaced by a function that returns a new array with the desired changes.

'use strict';

const a = Object.freeze([4, 5, 6]);

// Instead of: a.push(7, 8, 9);
const b = a.concat(7, 8, 9);

// Instead of: a.pop();
const c = a.slice(0, -1);

// Instead of: a.unshift(1, 2, 3);
const d = [1, 2, 3].concat(a);

// Instead of: a.shift();
const e = a.slice(1);

// Instead of: a.sort(myCompareFunction);
const f = R.sort(myCompareFunction, a); // R = Ramda

// Instead of: a.reverse();
const g = R.reverse(a); // R = Ramda

// Exercise for the reader:
// copyWithin
// fill
// splice
view rawarray-mutator-method-replacement.js hosted with ❤ by GitHub
The same thing goes when using a Map or a Set. We can avoid mutator methods by returning a new Map or Set with the desired changes.

const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three']
]);

// Instead of: map.set(4, 'four');
const map2 = new Map([...map, [4, 'four']]);

// Instead of: map.delete(1);
const map3 = new Map([...map].filter(([key]) => key !== 1));

// Instead of: map.clear();
const map4 = new Map();
view rawmap-mutator-method-replacement.js hosted with ❤ by GitHub
const set = new Set(['A', 'B', 'C']);

// Instead of: set.add('D');
const set2 = new Set([...set, 'D']);

// Instead of: set.delete('B');
const set3 = new Set([...set].filter(key => key !== 'B'));

// Instead of: set.clear();
const set4 = new Set();
view rawset-mutator-method-replacement.js hosted with ❤ by GitHub
I would like to add that if you are using TypeScript (I am a huge fan of TypeScript), then you can use the Readonly<T>, ReadonlyArray<T>, ReadonlyMap<K, V>, and ReadonlySet<T> interfaces to get a compile-time error if you attempt to mutate any of those objects. If you call Object.freeze on an object literal or an array, then the compiler will automatically infer that it is read-only. Because of how Maps and Sets are represented internally, calling Object.freeze on those data structures does not work the same. But it's easy enough to tell the compiler that you would like them to be read-only.

typescript-readonly.png
TypeScript Readonly Interfaces
TypeScript read-only interfaces

Okay, so we can create new objects instead of mutating existing ones, but won't that adversely affect performance? Yes, it can. Be sure to do performance testing in your own app. If you need a performance boost, then consider using Immutable.js. Immutable.js implements Lists, Stacks, Maps, Sets, and other data structures using persistent data structures. This is the same technique used internally by functional programming languages such as Clojure and Scala.

// Use in place of `[]`.
const list1 = Immutable.List(['A', 'B', 'C']);
const list2 = list1.push('D', 'E');

console.log([...list1]); // ['A', 'B', 'C']
console.log([...list2]); // ['A', 'B', 'C', 'D', 'E']


// Use in place of `new Map()`
const map1 = Immutable.Map([
  ['one', 1],
  ['two', 2],
  ['three', 3]
]);
const map2 = map1.set('four', 4);

console.log([...map1]); // [['one', 1], ['two', 2], ['three', 3]]
console.log([...map2]); // [['one', 1], ['two', 2], ['three', 3], ['four', 4]]


// Use in place of `new Set()`
const set1 = Immutable.Set([1, 2, 3, 3, 3, 3, 3, 4]);
const set2 = set1.add(5);

console.log([...set1]); // [1, 2, 3, 4]
console.log([...set2]); // [1, 2, 3, 4, 5]
view rawimmutable-js-demo.js hosted with ❤ by GitHub