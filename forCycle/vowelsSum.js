function vowelsSum(input) {
    let text = input[0]
    let answer = 0
    for (let i = 0; i < text.length; i += 1){
        let ch = text[i]
        switch(ch){
            case "a": answer += 1; break;
            case 'e': answer += 2; break;
            case 'i': answer += 3; break;
            case 'o': answer += 4; break;
            case 'u': answer += 5; break;
        }
    }
    console.log(answer)
}

vowelsSum(["bamboo"])