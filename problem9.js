// function welcomeMsg(name){
//     console.log('hello,', name)
// }

// welcomeMsg('ananta Jalil');
// welcomeMsg('hero alam');
// welcomeMsg('faisal sarker');
// welcomeMsg('ananta rahim');

// function sum(num1, num2){
//     var result = num1 + num2;
//     return result;
// }

// var sum= sum(3, 6);
// console.log(sum);

// function addNumber(a, b){
//     var sum = a+ b;
//     return sum;
// }

// console.log(addNumber(4, 8));
// check odd or even without return

function oddEven(number){
    if(number % 2 === 0){
        console.log('this is an even number.');
    }
    else{
        console.log('this is not an even number.')

        
    }
}

oddEven(12);

// check odd or even with return

function oddEven(number){
    if(number % 2 === 0){
        return 'this is an even number.';
    }
    else{
        return'this is not an even number.';

        
    }
}

const result = oddEven(45);
console.log(result);
