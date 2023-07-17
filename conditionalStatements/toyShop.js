function toyShop(input){
    let excursionPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let puzzlePrice = 2.60;
    let dollPrice = 3;
    let bearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2;

    let totalToys = puzzles + dolls + bears + minions + trucks;
    let totalMoney = puzzles * puzzlePrice + dolls * dollPrice + bears * bearPrice + minions * minionPrice + trucks * truckPrice;

    let discount = 0;
    if (totalToys >= 50){
        discount = totalMoney * 0.25;
    }

    totalMoney = totalMoney - discount;

    let rent = totalMoney * 0.10;
    totalMoney = totalMoney - rent;
    let calculatedMoney = totalMoney - excursionPrice;
    let answer = "";
    if (totalMoney >= excursionPrice){

        answer = `Yes! ${Math.abs(calculatedMoney).toFixed(2)} lv left.`;
    }
    else {
        answer = `Not enough money! ${(Math.abs(calculatedMoney)).toFixed(2)} lv needed.`;
    }

    console.log(answer);
}

toyShop(["40.8", "20", "25", "30", "50", "10"])
toyShop(["320", "8", "2", "5", "5", "1"])