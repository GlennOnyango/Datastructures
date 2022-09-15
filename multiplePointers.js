
function getUniquesItemsOnArray(params) {
    const setmix = new Set(params);
    return setmix.size;
}

console.log(getUniquesItemsOnArray([1,1,1,1,2]));
console.log(getUniquesItemsOnArray([1,2,3,4,4,5,6,7,8]));
console.log(getUniquesItemsOnArray([]));
console.log(getUniquesItemsOnArray([-2,-1,-1,0,1]));