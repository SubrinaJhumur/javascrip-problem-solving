//find out the factorial number answer

function fact(n){
    let result = 1;
    for(i= 1; i<= n; i++){
        result = result*i;
    }
    return result;
}
console.log(fact(8));

function fact(number){
    let result = 1;
    for (i=1; i<=number; i++){
        result = result* i;

    }
    return result;
}

console.log(fact(4));