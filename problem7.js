// find if anybody got A+ from you friends
// marks = [34, 67, 77, 89, 99]

function checkGPA(arr){
    for (let i= 0; i< arr.length; i++){
        if(arr[i] >= 80){
            return true;
        }
    }
    return false;
}

console.log(checkGPA([34, 67, 77, 89, 99]));

function checkCGPA(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= 80){
            return true;
        }
    }
    return false;
}
console.log(checkCGPA([34, 67, 77, 71, 21]));