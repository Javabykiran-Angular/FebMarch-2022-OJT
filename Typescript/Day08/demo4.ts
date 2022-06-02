//Simple json
// json=> java script object notation
// it store data in key & value format

let jsonobj={
    fname:'sumit',
    "lname":'Raokhande',
    id:9
}


// u can access/change data that json in 2 ways
//1 using dot operator
//2 using square operator

//1 using dot operator
// console.log(`
//       First name  :: ${jsonobj.fname}
//       Last Name   :: ${jsonobj.lname}
//       ID          :: ${jsonobj.id}
// `)

jsonobj.fname='Spruha';


// console.log(`
//       First name  :: ${jsonobj.fname}
//       Last Name   :: ${jsonobj.lname}
//       ID          :: ${jsonobj.id}
// `)


//2 using square operator

console.log(`
      First Name  :: ${jsonobj["fname"]}
      Last Name   :: ${jsonobj['lname']}
      Id          :: ${jsonobj["id"]}
`)

jsonobj["fname"]='Sumit';

console.log(`
      First Name  :: ${jsonobj["fname"]}
      Last Name   :: ${jsonobj['lname']}
      Id          :: ${jsonobj["id"]}
`)