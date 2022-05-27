//Anonymous function 

// function does not have any name

  let temp1=function (){
    console.log("Anonymous function is called")
  }

  // temp1();

  // hw function with parameter & without return type
  // hw function without parameter & with return type

  // function with parameter & with return type
 // alise
  let temp2=function (fname:string,lname:string):string{
    
    return (fname+" "+lname)
  }

  // console.log("Full name is "+temp2('sumit','Raokhande'))


  // fat arrow function / Arrow function

  let temp3= ()=>{
        console.log('fat arrow function is called')
      }

      // temp3();


      // hw function with parameter & without return type
  // hw function without parameter & with return type

  // 

  let temp4=(a:number,b:number):number=>{
    return (a+b);
  }

  // console.log(`
  //     Addition is using fat arrow ${temp4(5,4)}
  // `);

// Optional parameter function

    function add1(a:number,b?:number){

        console.log("Value of a is "+a) //7
        
        console.log("Value of B is "+b) // undefined
        
        console.log("Value of a+b is "+(a+b)) //NAN=> Not a number

    }

    // add1(7);

    function add2(a?:number,b?:number){

      console.log("Value of a is "+a) //7
      
      console.log("Value of B is "+b) // undefined
      
      console.log("Value of a+b is "+(a+b)) //NAN=> Not a number

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

  function add4(a:number,b:number=9){
    console.log("Value of a is "+a) //7
      
      console.log("Value of B is "+b) // 10
      
      console.log("Value of a+b is "+(a+b)) //17

  }

  // add4(4);
  // add4(7,10);

  function add5(a:number=8,b:number){
    console.log("Value of a is "+a) //7
      
      console.log("Value of B is "+b) // 10
      
      console.log("Value of a+b is "+(a+b)) //17

  }

  // add5(5,2)

  function add6(a?:number,b:number=10){
    console.log("Value of a is "+a) //7
      
      console.log("Value of B is "+b) // 10
      
      console.log("Value of a+b is "+(a+b)) //17

  }

// add6(80)
add6(80,2);