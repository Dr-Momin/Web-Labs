function isPrime(num){
   let count = 0;
   for (let i=1; i<=num; i++){
      if(num % i === 0)
         count++;
   }
   return count === 2;
}


console.log(isPrime(7));
console.log(isPrime(9));


