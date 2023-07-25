function smallShop(input) {
    let product = input[0]
    let city = input[1]
    let quntity = Number(input[2])
    let productPrice = 0

    if (city === "Sofia") {
        switch (product) {
            case "coffee": productPrice = quntity * 0.50; break;
            case "water": productPrice = quntity * 0.80; break;
            case "beer": productPrice = quntity *  1.20; break;
            case "sweets": productPrice = quntity *  1.45; break;
            case "peanuts": productPrice = quntity *  1.60; break
        }
        console.log(productPrice)
    }   else if (city === "Plovdiv"){
        switch (product) {
            case "coffee": productPrice = quntity *  0.40; break;
            case "water": productPrice = quntity *  0.70; break;
            case "beer": productPrice = quntity *  1.15; break;
            case "sweets": productPrice = quntity *  1.30; break;
            case "peanuts": productPrice = quntity *  1.50; break
        }
        console.log(productPrice)
    }   else if (city === "Varna"){
        switch (product) {
            case "coffee": productPrice = quntity *  0.45; break;
            case "water": productPrice = quntity *  0.70; break;
            case "beer": productPrice = quntity *  1.10; break;
            case "sweets": productPrice = quntity *  1.35; break;
            case "peanuts": productPrice = quntity *  1.55; break
        }
        console.log(productPrice)
    }
}

smallShop(["sweets",
"Sofia",
"2.23"])



