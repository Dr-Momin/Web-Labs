



function findIndex(arr, func){
    return func(arr);
}


const first = findIndex([8,11,4,27], (val) => {
    for (let i = 0; i < val.length; i++) {
        if (val[i] >= 10)
            return i;
    }
});

console.log(first);


const second = findIndex([8,11,4,27], (val) => {
    for (let i = 0; i < val.length; i++) {
        if (val[i] === 7)
            return i;
    }
});
console.log(second)
