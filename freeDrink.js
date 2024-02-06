function freeDrink(params){
    const items=[
        {food:'burger',price:200},
        {food:'pizza',price:150},
        {food:'chicken',price:300}
    ]
    let accumulation=0;
    params.map((value,index)=>{
        for(let i=0;i<items.length;i++){
            if(items[i].food == params[index]){
                accumulation += items[i].price;
            }
        }
    })

    if(accumulation <500){
        return `coke is not free, your total cost is ${accumulation + 50}`;
    }else{
        return `coke is free for you, your total cost is ${accumulation}`
    }
}


console.log(freeDrink(['chicken','chicken']));