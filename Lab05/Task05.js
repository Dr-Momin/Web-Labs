

function isEven(num){
   return num % 2 === 0;
}

function isOdd(num){
   return num % 2 !== 0;

}


function isPrime(num){
   let count = 0;
   for (let i=1; i<=num; i++){
      if(num % i === 0)
         count++;
   }
   return count === 2;
}



function numberFact(num, func){
   return func(num);
}

console.log(numberFact(59, isEven))
console.log(numberFact(59, isOdd))
console.log(numberFact(59, isPrime))
