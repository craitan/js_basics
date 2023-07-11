function usdToBgn(input){
    let usd = Number(input[0]);
    let bgn_per_usd = 1.79549;

    let answer = usd * bgn_per_usd;
    console.log(answer);
}
usdToBgn(["22"])
usdToBgn(["100"])