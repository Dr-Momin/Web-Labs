function specialMultiply(a,b){
    if (arguments.length === 2)
        return a*b;
    else
        return function(b) {
            return a*b;
        };
}


console.log(specialMultiply(3,4));
console.log(specialMultiply(3)(4));
console.log(specialMultiply(3))
