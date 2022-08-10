//check the lowest number all all 4 numbers

function checkLowest(num1, num2, num3, num4){
    if(num1<num2 && num1<num3 && num1< num4){
        return(num1 + " is the lowest number");
    }
    else if(num2<num1 && num2<num3 && num2< num4){
        return(num2 + " is the lowest number");
    }
    else if(num3<num2 && num3<num4 && num3< num1){
        return(num3 + " is the lowest number");
    }
    else{
        return(num4 + " is the lowest number");
    }
}

const result = checkLowest(67, 45, 22, 43);
console.log(result);