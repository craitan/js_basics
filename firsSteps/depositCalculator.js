function depositCalculator(input){
    let deposit = Number(input[0]);
    let months = Number(input[1]);
    let interest = Number(input[2]);

    let year_interest = deposit * (interest / 100);
    let month_interest = year_interest / 12;
    let answer = deposit + (months * month_interest);

    console.log(answer);
}

depositCalculator(["200", "3", "5.7"])
depositCalculator(["2350", "6", "7"])