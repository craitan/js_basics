function histogram(input){
    let numbersCount = Number(input[0]);
    let p1 = 0
    let p2 = 0
    let p3 = 0
    let p4 = 0
    let p5 = 0
    for(let i = 1; i <= numbersCount; i++){
        let checkNum = Number(input[i])
        if (checkNum < 200){
            p1++;
        }else if(checkNum <= 399){
            p2++;
        }else if (checkNum <= 599){
            p3++;
        }else if(checkNum <= 799){
            p4++;
        }else if(checkNum >= 800){
            p5++;
        }
    };

    let p1Procent = p1 / numbersCount * 100;
    let p2Procent = p2 / numbersCount * 100;
    let p3Procent = p3 / numbersCount * 100;
    let p4Procent = p4 / numbersCount * 100;
    let p5Procent = p5 / numbersCount * 100;

    console.log(`${p1Procent.toFixed(2)}%`);
    console.log(`${p2Procent.toFixed(2)}%`);
    console.log(`${p3Procent.toFixed(2)}%`); 
    console.log(`${p4Procent.toFixed(2)}%`);
    console.log(`${p5Procent.toFixed(2)}%`);
}
histogram(["7", "800", "801", "250", "199", "399", "599", "799"])