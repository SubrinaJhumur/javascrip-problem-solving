// count the numbers divisible by 3 from 1-30

function numbersDividibleBy3(){
    let count = 0;
    for(let i=1; i<= 30; i++){
        if(i % 3 ===0){
            count = count + 1;
        }
    }
    return count;
}

const result = numbersDividibleBy3();
console.log(result);


function numbersDividibleBy3(){
    let count = 0;
    for(let i = 1; i<=50; i++){
        if(i % 3 === 0){
            count = count + 1;
        }
    }
    return count;
}

const result1 = numbersDividibleBy3();
console.log(result1);
