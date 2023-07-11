
function radiansToDegrees(input){
    let radians = Number(input[0]);
    let answer = radians * 180 / Math.PI;
    console.log(answer);
}

radiansToDegrees(["3.1416"]);
radiansToDegrees(["6.2832"]);