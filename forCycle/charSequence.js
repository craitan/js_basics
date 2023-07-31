function charSequence(input) {
    let name = input[0]
    let length = name.length
    for (let i = 0; i < length; i += 1) {
        console.log(name[i])
    }
}

charSequence(["softuni"])