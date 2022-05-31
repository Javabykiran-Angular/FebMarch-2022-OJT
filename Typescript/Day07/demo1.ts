//Splice Method
let a:number[]=[22,21,45,63];

// console.log(a);
// a.splice(1,0,30);
// console.log(a)
// a.splice(2,0,55,50,70);
// console.log(a)
// a.splice(2,1);
// console.log(a)
// a.splice(1,3)
// console.log(a);
// a.splice(2,1,100);
// console.log(a)
// a.splice(1,1,200,202,204);
// console.log(a)

//Slice method
// It copy a section of data & it return a new array

let b:number[]=[10,20,30,55,71,75,84,90,14,22,25,96];
let temparr=b.slice(2,8);
// console.log("\n original Array "+b+"\n");
// console.log('Copied array '+temparr);
// console.log(`
//     ${b.slice(5)}
// `)

// console.log(`
//     ${b.slice()}
// `)

//Map method
// if u want element by element operation then u go for map method

let c=[2,3,4,5,6];

let res=c.map((myvalue)=>{
  return (myvalue*myvalue)
})
// console.log(c);
// console.log(res);

let res1=c.map((myvalue,i)=>{

  if(i==2 || i==4){
    return (myvalue*myvalue)
  }else{
    return myvalue
  }
 
})
// console.log(res1);

// derefence of array

let d=[77,12,45,99];

// let [t1,t2,t3,t4]=d;
console.log("Original array "+d)
// console.log(`
//     t1= ${t1}
//     t2=${t2}
//     t3=${t3}
//     t4=${t4}
// `)

// let [t11,t22,t33]=d;
// console.log(`
//     t11= ${t11}
//     t22=${t22}
//     t33=${t33}
    
// `)

let [t1,...arr]=d;
console.log(`
    t1=${t1}
    Array = ${arr}
`)

// let [a1,...arr1,a2]=d;

//hw 1st element & last element store in variable & rest of data store in different array 
//condition 1 original array does not change
//1st element & last element store in variable
// rest of data store in different array 

