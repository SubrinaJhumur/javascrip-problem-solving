//find out the leap year

function isLeapYear(year){
    if((year% 4 === 0 ) && (year% 100 != 0)||(year% 400 === 0)){
        return "Leap year";
    }
    else{
        return 'Not a leap year';
    }
}
console.log(isLeapYear(1955));

function isLeapYear(year){
    if((year%4 === 0)&&(year%100 != 0)||(year% 400 ===0)){
        return "Leap year";
    }
    else{
        return "Not a Leap year";
    }
}

console.log(isLeapYear(2041));
