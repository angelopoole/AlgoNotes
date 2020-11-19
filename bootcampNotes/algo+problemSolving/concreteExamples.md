# CONCRETE EXAMPLES!

> coming up with examples helps you understant the problem better
> examples also allow for sanity checks to make sure it works when its done at the end

**user stories ++ unit tests!**

> start with simple examples.
> progress to more complex examples
> explore examples with empty inputs
> explore examples with invalid inputs

! write a functino which takes in a string an returns counts of each character in the string

    let charCount = str => {
        arr = str.split("")
        newStrArr = []
        for(let i = 0; i <= arr.length - 1; i++){
          newStrArr.push(arr[i]);
        }
        return newStrArr.join("") + " counts:" + newStrArr.length.toString()
    }
