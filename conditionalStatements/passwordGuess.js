function passwordGuess(input){
    let correctPassword = "s3cr3t!P@ssw0rd";
    if (correctPassword === input[0]) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

passwordGuess(["qwerty"])
passwordGuess(["s3cr3t!P@ssw0rd"])