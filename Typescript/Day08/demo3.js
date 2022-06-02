//Swapping variables without using 3rd variables (Js interview Question)
// 1 using aaddition & difference
// 2 using Xor 
// 3 destructing/derefrence of array
var _a;
var a = 10;
var b = 20;
console.log("\n    Before swapping of variable\n    a = ".concat(a, "\n    b = ").concat(b, "\n"));
_a = [b, a], a = _a[0], b = _a[1];
console.log("\n    After swapping of variable\n    a = ".concat(a, "\n    b = ").concat(b, "\n"));
