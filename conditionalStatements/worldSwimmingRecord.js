function worldSwimmingRecord(input){
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let time = distance * timePerMeter;
    let delay = Math.floor(distance/15 ) * 12.5;
    let totalTime = time + delay;

    let difference = (totalTime - record);

    let answer = "";

    if (totalTime < record){
        answer = `Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`;
    } else {
        answer = `No, he failed! He was ${difference.toFixed(2)} seconds slower.`;
    }
    console.log(answer)
}

worldSwimmingRecord(["10464", "1500", "20"])
worldSwimmingRecord(["55555.67",
"3017",
"5.03"])
