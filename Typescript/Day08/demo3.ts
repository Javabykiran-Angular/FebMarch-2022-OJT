//Swapping variables without using 3rd variables (Js interview Question)
// 1 using aaddition & difference
// 2 using Xor 
// 3 destructing/derefrence of array

let a=10;
let b=20;

console.log(`
    Before swapping of variable
    a = ${a}
    b = ${b}
`);


[a,b]=[b,a];

console.log(`
    After swapping of variable
    a = ${a}
    b = ${b}
`);
