function cleverLily(input) {
    let age = Number(input[0]);
    let price = Number(input[1]);
    let toyPrice = Number(input[2]);

    let moneyForBurthday = 10;
    let toys = 0;
    let money = 0;
    let stolenMoney = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            stolenMoney++;
            money += moneyForBurthday;
            moneyForBurthday += 10;
        } else {
            toys++
        }
    }

    let moneyFromToys = toys * toyPrice;
    let savedMoney = money + moneyFromToys - stolenMoney;
    
    if (savedMoney >= price) {
        console.log(`Yes! ${(savedMoney - price).toFixed(2)}`)
    } else {
        console.log(`No! ${(price - savedMoney).toFixed(2)}`)
    }

}

cleverLily(["10", "170.00", "6"])
cleverLily(["21", "1570.98", "3"])

