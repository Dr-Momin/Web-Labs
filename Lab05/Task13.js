



function extractKey(arr, key){
    const result = [];
    for(const el of arr)
        result.push(el[key]);
    return result;
}




extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name");



