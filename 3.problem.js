//count the number of vowels in a string


// var letter= "I love my country bangladesh very much"

// function vowelNumber(str1){
//     let vowel_list = "aeiouAEIOU";
//     let count = 0;
//     for (let x =0; x<str1.length; x++){
//         if(vowel_list.indexOf(str1[x]) !== -1){
//             count = count + 1;
//         }
//     }
//     return count;
// }

// console.log(vowelNumber("I love my country bangladesh very much"));

// function vowelNumber(str){
//     let vowel_list = 'aeiouAEIOU';
//     let count = 0;
//     for(let x = 0; x< str.length; x++){
//         if(vowel_list.indexOf(str[x]) !== -1){
//             count = count + 1;
//         }
//     }
//     return count;
// }
// console.log(vowelNumber("people in this country living under a thick poverty line"));

function vowelNumbers(str){
    let vowel_list = 'aeiouAEIOU';
    let count = 0;
    for(let x = 0; x< str.length; x++){
        if(vowel_list.indexOf(str[x])!==0){
            count = count+ 1;
        }
    }
    return count;
}

console.log(vowelNumbers('people now in this country find too hard live their daily life as the cost of daily necessary is going up day by day'))