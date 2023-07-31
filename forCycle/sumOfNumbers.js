function sumOfNumbers(input){
    let number = input[0]
    let sum = 0
    for(i = 0; i < number.length; i+=1){
        let ch = number[i]
        let chNumber = Number(ch)
        sum += chNumber
    }

    console.log(`The sum of the digits is:${sum}`)
}

sumOfNumbers(["564891"])