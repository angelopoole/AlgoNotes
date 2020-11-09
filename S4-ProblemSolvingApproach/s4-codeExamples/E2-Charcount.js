//Write a function that takes in a string and returns counts of each character in the string

let charCounter = string => {
	freqCounter = {};
	splitString = string.split('');
	for (letter of splitString) {
		freqCounter[letter] ? freqCounter[letter]++ : (freqCounter[letter] = 1);
	}
	return freqCounter;
};

console.log(charCounter('hello'));
