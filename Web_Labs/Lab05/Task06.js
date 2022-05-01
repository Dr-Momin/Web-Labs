



function find(arr, func){
    return func(arr);
}

const first = find([8,11,4,27], (val) => {
    for (let i = 1; i <= val.length; i++) {
        if(val[i] >= 10){
            return val[i];
        }
    }
});

console.log(first)

const second = find([8,11,4,27], function(val){
    for (let i = 1; i <= val.length ; i++) {
        if (val[i] === 5){
            return val[i];
        }
    }
});
console.log(second);
