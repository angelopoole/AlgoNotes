# BREAK IT DOWN!

1.explicitly write out the steps you need to take, it just has to be the basics

> This forces you to think about the code you'll write before oyu write it. catch lingering conceptual issues or misunderstandings before you dive in to worry about the details

    let charCount = str => {
    arr = str.split("")
    newStrArr = []
    for(let i = 0; i <= arr.length - 1; i++){
       newStrArr.push(arr[i]);
    }
    return newStrArr.join("") + " counts:" + newStrArr.length.toString()
    }

//make object to return at end
// loop over string, for each character...
//if hcar is num/letter a key in object, add one to count
//if character not in object, add it and set value to 1
//if something other than alphanumeric dont do anything

// return object at end
