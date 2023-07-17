function sumSeconds(input){
    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);
    let totalTime = firstTime + secondTime + thirdTime;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10){
        seconds = "0" + seconds;
    }

    console.log(`${minutes}:${seconds}`)

}

sumSeconds(["35", "45", "44"])
sumSeconds(["14", "12", "10"])
sumSeconds(["50", "50", "49"])
