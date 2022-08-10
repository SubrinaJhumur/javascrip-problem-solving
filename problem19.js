//find out an array odd even sum

function oddEvenSum(arr){
    let evenSum = 0;
    let oddSum = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i]% 2 == 0){
            evenSum = evenSum+ arr[i];

        }
        else{
            oddSum = oddSum + arr[i];
        }
    }
    console.log('even sum:', evenSum, 'oddSum:', oddSum);
}
const arr =[ 1, 2, 3, 4, 5, 6, 7, 8];
oddEvenSum(arr);

function oddEvenSum1(arr1){
    let oddSum = 0;
    let evenSum = 0;
    for(let i = 0; i< arr1.length; i++){
        if(arr1[i]%2 ===0){
            evenSum = evenSum +arr1[i];
        }
        else{
            oddSum = oddSum + arr1[i];
        }

    }
    console.log("evenSum:",evenSum, 'oddSum: ', oddSum);
}

const arr1 = [22, 33,44, 54, 67, 78, 98,90];
oddEvenSum1(arr1);