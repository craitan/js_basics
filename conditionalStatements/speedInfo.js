function speedInfo(input){
    let speed = Number(input[0]);
    let answer = "";

    if (speed <= 10){
        answer = "slow";
    } else if (speed > 10 && speed <=50){
        answer = "average";
    } else if (speed > 50 && speed <=150){
        answer = "fast";
    } else if (speed > 150 && speed <=1000){
        answer = "ultra fast";
    } else if (speed > 1000){
        answer = "extremely fast";
    }

    console.log(answer);

}
speedInfo(["8"])
speedInfo(["49.5"])
speedInfo(["126"])
speedInfo(["160"])
speedInfo(["3500"])
