//Shallow Copy & deep Copy
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var a = [1, 2, 3, 4];
var b = a;
//shallow copy
// console.log("Array A is "+a);
// console.log("Array B is "+b);
b[0] = 22;
// console.log('---------------------')
// console.log("Array A is "+a); 
// console.log("Array B is "+b); 
//deep Copy
var c = __spreadArray([], a, true);
console.log("\n    a array ".concat(a, "\n    c Array ").concat(c, "\n"));
c[1] = 100;
console.log("\n--------------------------\n    a array ".concat(a, "\n    c Array ").concat(c, "\n"));
