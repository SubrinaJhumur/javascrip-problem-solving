// claculate electricity bill
// for first 100 unit- 5 tk per unit
// for more than  100 unit- 6 tk per unit
// for more than  200 unit- 7 tk per unit

// function electricityBill(unit){
//     let bill;
//     if(unit <= 100){
//         bill = unit * 5;
//     }
//     else if(unit <= 200){
//         const first100 = 100*5;
//         const remaining = unit - 100;
//         const remainingCost = remaining* 6;
//         bill = first100 + remainingCost;
//     }
//     else if(unit >200){
//         const first100 = 100*5;
//         const second100 = 100* 6;
//         const remaining = unit - 200;
//         const remainingCost = remaining*7;
//         bill = first100 + second100 + remainingCost;

//     }
//     return bill;

// }

// const result = electricityBill(250);
// console.log(result);

function electricityBill(unit){
    if(unit<100){
        bill = unit * 5;
    }
    else if( unit <=200){
        const first100 = 100*5;
        const remaining = unit - 100;
        const remainingCost = remaining*6;
        bill = first100 + remainingCost;
    }
    else if(unit>200){
        const first100= 100*5;
        const second100 = 100*6;
        const remaining = unit - 200;
        const remainingCost = remaining *7;
        bill = first100 + second100 + remainingCost;

    }
    return bill;
}

const result = electricityBill(150);
console.log(result);