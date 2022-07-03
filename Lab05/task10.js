// Write a function called printFirstAndLast which accepts an array (of
// objects) and console.log a new string with the first character and the last
// character of each value.


function printFirstAndLast (arr) {

    let newString = '';

    arr.forEach ( function (val) {
        let newVal = val[val.length-1];
        newString = val[0] + newVal;
        console.log(newString);
    });
}

printFirstAndLast(['awesome', 'example', 'of', 'forEach']);




