function yardGreening(input){
    let price_per_square_meter = 7.61;
    let discount = 0.18;
    let square_meters = Number(input[0]);

    let price = square_meters * price_per_square_meter;
    let discount_price = price * discount;
    let final_price = price - discount_price;

    console.log(`The final price is: ${final_price} lv.`);
    console.log(`The discount is: ${discount_price} lv.`);
}

yardGreening(["550"])
yardGreening(["150"])