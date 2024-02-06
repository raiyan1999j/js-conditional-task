function bmiCalc(weight,height){
    let step1 = weight;
    let step2 = (height * 12) * 0.0254;
    let step3 = Math.pow(step2,2);
    let step4 = step1 / step3;

    if(step4 < 18.5){
        return `you are underweight, your BMI is ${step4}`;
    }else if(step4 >= 18.5 && step4 <= 24.9){
        return `you are normal, your BMI is ${step4}`;
    }else if(step4 >= 25 && step4 <= 29.9){
        return `you are overweight, your BMI is ${step4}`;
    }else{
        return `you are obese, your BMI is ${step4}`;
    }
}

console.log(bmiCalc(80,6.5));