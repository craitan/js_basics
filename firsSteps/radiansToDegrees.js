
function radiansToDegrees(input){
    let radians = Number(input[0]);
    let answer = radians * 180 / Math.PI;
    //to.Fixed(0) rounds the number to the nearest integer
    console.log(answer);
}

radiansToDegrees(["3.1416"]);
radiansToDegrees(["6.2832"]);