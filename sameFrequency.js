function sameFrequency(num1,num2) {
    
    let num1Array = num1.toString().split("");
    let num2Array = num2.toString().split("");
    
    if(num1Array.length !== num2Array.length) return false; 


    let num1Obj = {}
    let num2Obj = {}

    num1Array.forEach(e => {
        num1Obj[e] ? num1Obj[e] = 1 : num1Obj[e] = num1Obj[e]++;
    });
    num2Array.forEach(e => {
        num2Obj[e] ? num2Obj[e] = 1 : num2Obj[e] = num2Obj[e]++;
    });

    return JSON.stringify(num1Obj)===JSON.stringify(num2Obj);
}
console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false