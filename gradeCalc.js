function gradCalc(num){
    let result = num > 90 && num <= 100 ? 'A'
    : num > 80 && num <= 89 ?'B'
    : num > 70 && num <= 79 ?'C'
    : num > 60 && num <= 69 ?'D'
    : num > 0  && num <= 59 ?'F'
    :"";

    console.log(result);
}

gradCalc(95);