const reverse_string = [];
function reverse(array) {
  // add whatever parameters you deem necessary - good luck!
  if (array.length === 0) return -1;
  if (array.length === 1) {
    reverse_string.push(array);
    let new_string = reverse_string.join("");
    reverse_string.length = 0;
    return new_string;
  }
  let new_array = array.split("");
  reverse_string.push(new_array.pop());
  return reverse(new_array.join(""));
}

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
