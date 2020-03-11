/*let sum = a => b => b ? sum( a + b) : a;

console.log(sum(10)(13)(10)); */

let sum = function (a) {
  let closureFunc = b =>  b ? sum(a + b) : a;
  closureFunc.toString = function() {
    return a;  
  }
  return closureFunc;
}
console.log(sum(10)(2)(3)(4));
