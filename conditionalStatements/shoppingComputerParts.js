function shoppingComputerParts(input){
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let videoCardsPrice = videoCards * 250;
    let processorsPrice = processors * (videoCardsPrice * 0.35);
    let ramPrice = ram * (videoCardsPrice * 0.1);
    let totalCost = videoCardsPrice + processorsPrice + ramPrice;

    if (videoCards > processors){
        totalCost = totalCost * 0.85;
    }

    let difference = Math.abs(budget - totalCost);
    let answer = "";

    if (budget >= totalCost){
        answer = `You have ${difference.toFixed(2)} leva left!`;
    } else {
        answer = `Not enough money! You need ${difference.toFixed(2)} leva more!`;
    }

    console.log(answer);
}
shoppingComputerParts(["900",
"2",
"1",
"3"])

shoppingComputerParts(["920.45",
"3",
"1",
"1"])

