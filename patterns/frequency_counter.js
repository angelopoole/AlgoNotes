// this pattern uses objects or sets to collect values/frequencys of values

// this can often avoid the need for nested loops or O(N^2) operations with arrays/ strings

// ex: write a function called same which accepts two arrays the function should return true if every value in the array has its corresponding value squared in the second array. the frequency of the values must be the same!
// ### heres the solution i came up with initialy, this has a O(N^2) time complexity, this is wrong because i assumed it would be the number^number rather than num^2

function same(arr1, arr2) {
    //accepts two arrays
    //return tru if every value in the array has
    //co-responding square in second array
    //value frequency must be the same
    arr1 = arr1.sort((a, b) => a - b);
    arr2 = arr2.sort((a, b) => a - b);
    for (let num1 in arr1) {
        for (let num2 in arr2) {
            if (arr2[num1] === Math.pow(arr1[num1], arr1[num1])) {
                return true
            } else {
                return false
            }
        }

    }

}

// here is the frequency naive solution ->

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex, 1)
    }
    return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4])


// here is the same refactored -> 

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])