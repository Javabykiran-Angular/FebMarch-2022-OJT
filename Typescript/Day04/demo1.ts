//type assertion
var a:any;

// it has 2 way
//1 Angle bracket
//2 as syntax

//1 Angle bracket

var temp=(<string> a);
// temp.


//2 as syntax
var temp1=(a as string);
// temp1.


//operators
//Airthemathic => +,-,/,*,%
//bitwise => &,|,^,>>,<<,~
// logical => &&,||,!
//relational => <=,<,>,>=,!=,==(it only checks value),=== (it is strongly equality it checks type as well as data)
//Assignment => =,+=,-=,/=,*=
//unary => ++,--, pre/post inc/dec
//ternary => condition?Expression1:expression2

//Control Statement

//if,if-else,nested if-else,switch,break,continue

var count=15;
// if(count<10){
//   console.log("Condition is true");
// }else{
//   console.log("Condition is false");
// }
var choice=21;
// switch(choice){
//   case 1:console.log('U r in case 1');
//           break;
//   case 2:console.log('U r in case 2');
//           break;
//   default:console.log("U r in default case ")   
//           break;      
// }

// Loop Statement
//for,foreach,do-while,while
var count1=5;
// do{
//   console.log("Count1 is "+count1);
//   count1--;
// }while(count1!=0)

// while(count1!=0){
//   console.log(`
//       Count1 is ${count1}
//   `)
//   count1--;
// }

//For loop

// for(var i=0;i<5;i++){
// console.log("value of i is "+i)

// }

// console.log("Value of i After the loop "+i);

// let keyword scope=> it has within nearest block (block scope)
// var has global scope

for(let i=0;i<5;i++){
  console.log("value of i is "+i)
  
  }

// console.log("I Access After loop "+i)

// const 
// u can assign a const value => it is same like ur final keyword

const pi=3.14;
// pi=2.5;
const h=5;
// Scope => it has local as well as global 
//
