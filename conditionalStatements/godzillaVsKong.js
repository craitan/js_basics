function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let clothesPriceForPerson = Number(input[2]);

    let decor = budget * 0.1;
    let clothesPrice = extras * clothesPriceForPerson;
    if (extras > 150) {
        clothesPrice = clothesPrice * 0.9;
    }
    let totalCost = decor + clothesPrice;
    let difference = Math.abs(budget - totalCost);
    if (totalCost > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${difference.toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["20000", "120", "55.5"])
