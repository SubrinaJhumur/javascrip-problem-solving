//findout the discount value

function discountValue(price){
    if(price>5000){
        const totalPrice = (price - (price*.2));
        console.log("the main price will be "+ totalPrice);
    }
    else if(price>= 3000){
        const totalPrice = (price - (price*.15));
        console.log("the main price will be "+ totalPrice);
    }
    else if(price>=1000){
        const totalPrice = (price - (price*.1));
        console.log("the main price will be "+ totalPrice);
    }

}

discountValue(15000);
