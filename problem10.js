// check the largest number

function checkLargest(num1, num2, num3){
    if(num1>num2 && num1> num3){
        returnreturn(num1+" is greates among all three numbers");
    }
    else if(num2>num1 && num2>num3){
        return(num2 +" is greates among all three numbers");
    }
    else{
        return(num3 +" is greates among all three numbers");
    }
}

const result = checkLargest(5, 98, 777);
console.log(result);