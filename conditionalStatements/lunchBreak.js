function lunchBreak(input){
    let movie = input[0];
    let movieTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let timeForLunch = breakTime / 8;
    let timeForRest = breakTime / 4;
    let timeLeft = breakTime - timeForLunch - timeForRest;

    let freeTime = Math.abs(movieTime - timeLeft);

    if (timeLeft >= movieTime){
        console.log(`You have enough time to watch ${movie} and left with ${Math.ceil(freeTime)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${movie}, you need ${Math.ceil(freeTime)} more minutes.`)
    }
}

lunchBreak(["Game of Thrones",
"60",
"96"])

lunchBreak(["Teen Wolf",
"48",
"60"])

