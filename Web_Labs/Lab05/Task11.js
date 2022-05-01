
const addKeyAndValue = (arr,key,value) => {
    arr.map(obj => {
        obj[key] = value;
    })
};


let ab = [{name: 'Elie'}, {name: 'Time'}, {name: 'Elie'}];

addKeyAndValue(ab, "isInstructor", true);

console.log(ab);


