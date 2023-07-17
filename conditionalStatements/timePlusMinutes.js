function timePlusMinutes(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMinutes = hours * 60 + minutes;
    let totalMinutesPlus15 = totalMinutes + 15;
    let finalHours = Math.floor(totalMinutesPlus15 / 60);
    let finalMinutes = totalMinutesPlus15 % 60;

    if (finalHours > 23){
        finalHours = 0;
    }
    if (finalMinutes < 10){
        finalMinutes = "0" + finalMinutes;
    }
    console.log(`${finalHours}:${finalMinutes}`)

}

timePlusMinutes(["1", "46"])