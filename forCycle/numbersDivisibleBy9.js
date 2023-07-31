function numbersDivisibleBy9(input) {
    let firstNumber = Number(input[0])
    let secondNumber = Number(input[1])
    let sum = 0
    let buff = ""
    for (let i = firstNumber; i <= secondNumber; i += 1) {
        if (i % 9 === 0){
            buff += `${i}\n`
            sum += i
        }
    }

    console.log(`The sum: ${sum}`)
    console.log(buff)
}

numbersDivisibleBy9(["100", "200"])