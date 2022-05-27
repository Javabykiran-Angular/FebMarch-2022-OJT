//Anonymous function 
// function does not have any name
var temp1 = function () {
    console.log("Anonymous function is called");
};
// temp1();
// hw function with parameter & without return type
// hw function without parameter & with return type
// function with parameter & with return type
// alise
var temp2 = function (fname, lname) {
    return (fname + " " + lname);
};
// console.log("Full name is "+temp2('sumit','Raokhande'))
// fat arrow function / Arrow function
var temp3 = function () {
    console.log('fat arrow function is called');
};
// temp3();
// hw function with parameter & without return type
// hw function without parameter & with return type
// 
var temp4 = function (a, b) {
    return (a + b);
};
// console.log(`
//     Addition is using fat arrow ${temp4(5,4)}
// `);
// Optional parameter function
function add1(a, b) {
    console.log("Value of a is " + a); //7
    console.log("Value of B is " + b); // undefined
    console.log("Value of a+b is " + (a + b)); //NAN=> Not a number
}
// add1(7);
function add2(a, b) {
    console.log("Value of a is " + a); //7
    console.log("Value of B is " + b); // undefined
    console.log("Value of a+b is " + (a + b)); //NAN=> Not a number
}
// add2();
// add2(5,6);
//   function add3(a?:number,c?:number,b?:number){
//     console.log("Value of a is "+a) //7
//     console.log("Value of B is "+b) // undefined
//     console.log("Value of a+b is "+(a+b)) //NAN=> Not a number
// }
//HW fat arraow function => multiplication 
// default parameter function
function add4(a, b) {
    if (b === void 0) { b = 9; }
    console.log("Value of a is " + a); //7
    console.log("Value of B is " + b); // 10
    console.log("Value of a+b is " + (a + b)); //17
}
// add4(4);
// add4(7,10);
function add5(a, b) {
    if (a === void 0) { a = 8; }
    console.log("Value of a is " + a); //7
    console.log("Value of B is " + b); // 10
    console.log("Value of a+b is " + (a + b)); //17
}
// add5(5,2)
function add6(a, b) {
    if (b === void 0) { b = 10; }
    console.log("Value of a is " + a); //7
    console.log("Value of B is " + b); // 10
    console.log("Value of a+b is " + (a + b)); //17
}
// add6(80)
add6(80, 2);
