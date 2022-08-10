// find the number weather it is a prime number or not


function isPrime(number){
    for(let i = 2; i < number; i++){
        if(number % i == 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(121));