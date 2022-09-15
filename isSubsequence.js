function isSubsequence(string1,string2) {
    // good luck. Add any arguments you deem necessary.
    let str2Obj = {};
    for (let i = 0; i < string2.length; i++) {
        if(str2Obj[string2[i]]){
            return true;
        }else{
            str2Obj[string2[i]] = 1;
        }
    }

    for (let i = 0; i < string1.length; i++) {
        if(str2Obj[string1[i]]) return true;
    }
    return false;
  }

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true 
console.log(isSubsequence('abc', 'abracadabra')); // true