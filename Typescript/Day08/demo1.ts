
//Shallow Copy & deep Copy

let a=[1,2,3,4];
let b=a;
//shallow copy
// console.log("Array A is "+a);
// console.log("Array B is "+b);

b[0]=22;
// console.log('---------------------')
// console.log("Array A is "+a); 
// console.log("Array B is "+b); 

//deep Copy

let c=[...a];
console.log(`
    a array ${a}
    c Array ${c}
`)

c[1]=100;

console.log(`
--------------------------
    a array ${a}
    c Array ${c}
`)




