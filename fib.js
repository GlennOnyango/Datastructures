

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
// function fib(num){
//     // add whatever parameters you deem necessary - good luck!
//     const ray = [];
//     for (let i = 0; i < num; i++) {
//         if(i < 2){
//             ray.push(1)
//         }else{
//             ray.push(ray[ray.length - 1] + ray[ray.length - 2])
        
//         }
//             }

//     return ray[ray.length - 1];        
// }


console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
