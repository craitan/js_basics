function zooMagazine(input){
    let dog_food = Number(2.5)
    let cat_food = Number(4)
    let dog_food_to_buy = Number(input[0])
    let cat_food_to_buy = Number(input[1])

    let answer = (dog_food * dog_food_to_buy) + (cat_food * cat_food_to_buy)
    console.log(answer + " lv.")
}

zooMagazine(["5 ", "4 "])