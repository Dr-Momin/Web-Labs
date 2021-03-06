/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => {
    return [...array1, ...array2];
}
/** Return a new object with all the keys and values
 from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}
/** Return a new object with a key removed. */
function removeKey(obj, key) {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}
/** Combine two objects and return a new object. */
function combine(obj1, obj2) {
    return [...obj1, ...obj2];
}
/** Return a new object with a modified key and value. */
function update(obj, key, val) {
    return {...obj, [key]:val}
}

