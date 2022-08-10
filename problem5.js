//apple dum
//for 2 kg - 200tk per kg
//for more than 2 kg - 180tk per kg
// write a function to calculate total price based on quantity

//  function totalPrice(quantity){
//     if(quantity <= 2){
//         price = quantity * 200;
//     }
//     else{
//         price = quantity * 180;
//     }
//     return price;
//  }

//  const result = totalPrice(4);
//  console.log(result);

function totalPrice(poriman){
    if(poriman <= 3){
        price = poriman * 200;
    }
    else{
        price = poriman * 180;
    }
    return price;
}

const result = totalPrice(3);
console.log(result);