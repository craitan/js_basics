function fromSmToInch(input){
    let a = Number(input[0]);
    let inch = Number(2.54)
    let answer = a * inch;
    console.log(answer);
}

fromSmToInch(["5"]);
fromSmToInch(["7"]);