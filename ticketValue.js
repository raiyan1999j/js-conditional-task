function ticketVal(age){
    let price = 800;

    if(age < 10){
        price = 0;
        console.log(`as you are kid your ticket price is ${price}`)
    }else if( age > 10 && age <= 30){
        let deduct = (price * 50) / 100;
        price = price - deduct;

        console.log(`as you are student your ticket price is ${price}`)
    }else if(age >= 60){
        let deduct = (price * 15)/100;
        price = price - deduct;

        console.log(`as you are senior citizen your ticket price is ${price}`)
    }else{
        console.log(`your ticket price is ${price}`)
    }
}

ticketVal(40);