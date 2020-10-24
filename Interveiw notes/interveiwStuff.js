/**
 https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3
 https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4

 inheritance, encapsulation, polymorphism
 https://stackify.com/oop-concept-for-beginners-what-is-encapsulation/

 prototypes in javascript
 prototypal inheritance

array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

gorilla banana problem: https://vimeo.com/69255635

composition vs inheritance : https://youtu.be/wfMtDGfHWpA

https://www.edureka.co/blog/interview-questions/react-interview-questions/


 */

function hello() {
	return 'Hello world - JavaScript!';
}

console.log(hello());

function person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;  
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
        this.lastName = name;
    };
}

var antonio = person(....)

class Person {
	constructor(firstName, lastName, age, eyeColor) {
    	this.firstName = firstName;  
    	this.lastName = lastName;
    	this.age = age;
    	this.eyeColor = eyeColor;
	}

	changeName(name) {
        this.lastName = name;
    };

}

var antonio2 = new Person(....)

array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

// in ruby lambda
// closure:
function create() {
   var counter = 0;
   return {
      increment: function() {
         counter++;
      },
  
      print: function() {
         console.log(counter);
      }
   }
}
var c = create();
c.increment();
c.print(); // 1
let a = 0

// console.log(a++)

/*

div {
  height: 200px; rem, em, pt (1pt = 1/72 inch), in,cm, mm, vh (1vh = 1% of viewport height),  vw, auto, pi (= 12pt)
  width: 50%;
}



-> 
Lifecycle Methods
componentWillMount is executed before rendering, on both the server and the client side.
componentDidMount is executed after the first render only on the client side. This is where AJAX requests and DOM or state updates should occur. This method is also used for integration with other JavaScript frameworks and any functions with delayed execution such as setTimeout or setInterval. We are using it to update the state so we can trigger the other lifecycle methods.
componentWillReceiveProps is invoked as soon as the props are updated before another render is called. We triggered it from setNewNumber when we updated the state.
shouldComponentUpdate should return true or false value. This will determine if the component will be updated or not. This is set to true by default. If you are sure that the component doesn't need to render after state or props are updated, you can return false value.
componentWillUpdate is called just before rendering.
componentDidUpdate is called just after rendering.
componentWillUnmount is called after the component is unmounted from the dom. We are unmounting our component in main.js.

*/

let a = 3
let b = 5

// a,b = b,a 










var acoffee = 5
var btea = 3

var container = acoffee
acoffee = btea
btea = container

// palindrome words: kayak mom racecar cvbnmmnbvc
// write a function that returns true if a given word is a palindrome, false otherwise
// don't use .reverse()

function isPalindrome(word) {
	return reversed(word) === word
}

function reversed(word) {
	let split = word.split('');
	let reversed = []
	for(let i of split){
		reversed.push(split[i])
	}
	return reversed.concat('')
}

0123456 
racecar

for (i = 0; i < length/2; i++) {
	if (word[i] !== word[length - i - 1]) {
		return false
	}
}
return true

// given an array of integers find the most repeated number. 
// in case of [3,4,4,4,4,5,5,6,6,6,4,4,4,4,3] returns 4


function freq(arr){
	freqArr = {}
	let maxVal = 0
	let maxKey = -1
	for(let i of arr) {
		if (freqArr[arr[i]]){
			freqArr[arr[i]] += 1
		} else {
			freqArr[arr[i]] = 1
		}
	}

	Object.keys(freqArr).forEach(function(key) {
		let value = freqArr[key]
		if (value > maxVal) {
			maxVal = value
			maxKey = key
		}		
	})
	return maxKey
}


https://skilledinc.s3.amazonaws.com/resumes/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTI4NjU3OTB9.-ekgJU9vA82WFx6OTa42C6fgZSoIfV4wzQQexkovlPk/7038_resume