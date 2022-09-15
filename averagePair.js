function averagePair(array,num){
    // add whatever parameters you deem necessary - good luck!
    if(array.length < 2) return false;
    let start = 0;
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if(count == 0){
            start = i
            count++;
        }else if((i+1) == array.length && (start+1) != array.length){
            const avPair = (array[start] + array[i])/2;
            if(avPair == num){
                return true;
            }
            start += 1;
            i = 0;
        }
        else{
            const avPair = (array[start] + array[i])/2;
            if(avPair == num){
                return true;
            }
        }
    }
    return false;
    
}
console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([],4)) // false