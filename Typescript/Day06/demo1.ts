//array 
//array is shrinkable & growable dynamically
// don't need to specify size of an array
//u can store Hetrogenous data type as well as homogenous data type

let a:number[]=[2,3,88,7];
let a1=[44,55,66,77];
let a2:number[]=[];
let a3:any[]=[];
let a4=[2.5,'sumit',true,9,'Raokhande'];
let a5=[];

//for loop
// for(let i=0;i<a.length;i++){
//   console.log("Array of value is "+a[i]+"Index is "+i)
// }

// console.log('Array value is '+a);
// console.log("Display Array using Join "+a.join(" # "));

//forEach

a.forEach((myvalue,i,myarr)=>{
    // console.log(`
    //     a[${i}]=${myvalue}
    //     Full array=  ${myarr}
    // `)

  console.log("a["+i+"]="+myvalue)


})

// Rest parameter Functions 

function display(...item:number[]){
    console.log('Array is '+item)
}

// display(45,55);
// display(7,8,9,66,33,12,45,77,100);

//Push & pop method

// dynamically value add 
// 1 Push & pop method
// 2 using Splice method

// 1 Push & pop method
// LIFO Principle => Last In first out 

let b:number[]=[];

// b.push(85);
// console.log(b);
// b.push(78,99,45,50);
// console.log(b);
// let res=b.pop();
// console.log(b);
// console.log("Poped data is "+res);

