function fruitShop(input) {
    let product = input[0]
    let currentDay = input[1]
    let quantity = Number(input[2])
    let price = 0
    const weekDays = "Monday Tuesday Wednesday Thursday Friday Saturday Sunday"

    if (weekDays.includes(currentDay)) {
        switch (currentDay) {
            case 'Monday':
            case 'Tuesday':
            case 'Wednesday':
            case 'Thursday':
            case 'Friday': {
                switch (product) {
                    case "banana": price = quantity * 2.5; break;
                    case "apple": price = quantity * 1.2; break;
                    case "orange": price = quantity * 0.85; break;
                    case "grapefruit": price = quantity * 1.45; break;
                    case "kiwi": price = quantity * 2.7; break;
                    case "pineapple": price = quantity * 5.5; break;
                    case "grapes": price = quantity * 3.85; break;
                    default: console.log('error'); break;
                }
            }; break;
            case 'Saturday':
            case 'Sunday': {
                switch (product) {
                    case "banana": price = quantity * 2.7; break;
                    case "apple": price = quantity * 1.25; break;
                    case "orange": price = quantity * 0.9; break;
                    case "grapefruit": price = quantity * 1.60; break;
                    case "kiwi": price = quantity * 3; break;
                    case "pineapple": price = quantity * 5.6; break;
                    case "grapes": price = quantity * 4.2; break;
                    default: console.log('error'); break;
                }
            }; break;
        }
    } else {
        console.log('error')
    }

    if (price > 0) {
        console.log(price.toFixed(2))
    }

}

fruitShop(["tomato",
    "Monday",
    "0.5"])

fruitShop(["grapes",
    "Saturday",
    "0.5"])



