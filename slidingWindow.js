function slidingWindow(array,num){
    let max = 0;
    if(num > array.length) return max;
    if(num === 1) return Math.max(...array);
    for (let i = 0; i < num; i++) {
        max += array[i];
    }
    for(let i = 0;i < array.length;i++){
        let addition_index = i + num;
        let holder = 0;
        if(array[addition_index]){
            holder = (max - array[i]) + array[addition_index]; 
        }
        if(holder > max){
            max = holder;
        }
    }
    return max;
}

console.log(slidingWindow([1,2,5,2,8,1,5],2));
console.log(slidingWindow([1,2,5,2,8,1,5],4));
console.log(slidingWindow([4,2,1,6],1));
console.log(slidingWindow([4,2,1,6,2],4));
console.log(slidingWindow([],4));