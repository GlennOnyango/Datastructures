function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!
  let str2 = str.split("");
  return (str2.reverse()).join("") === str;
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false
