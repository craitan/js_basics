function evenPowersOf2(input) {
    let n = Number(input[0])
    
    for (i = 0; i <= n; i += 2) {
        let answer = Math.pow(2, i)
        console.log(answer)
    }
}

evenPowersOf2(['3'])