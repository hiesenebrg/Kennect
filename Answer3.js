function isPrime(n){
    for(let i =2;i<n/2;i++){
        if(n%i==0){
            return false;      
        }
    }
    return true;
}
function nextPrime(n){
    if(!isPrime(n)){
       return nextPrime(n+1);
    }
    return n;
}
function answer(n){
    if(isPrime(n)) return n;
    else return Math.abs(n - nextPrime(n));
}

console.log(answer(20));