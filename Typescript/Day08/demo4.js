//Simple json
// json=> java script object notation
// it store data in key & value format
var jsonobj = {
    fname: 'sumit',
    "lname": 'Raokhande',
    id: 9
};
// u can access/change data that json in 2 ways
//1 using dot operator
//2 using square operator
//1 using dot operator
// console.log(`
//       First name  :: ${jsonobj.fname}
//       Last Name   :: ${jsonobj.lname}
//       ID          :: ${jsonobj.id}
// `)
jsonobj.fname = 'Spruha';
// console.log(`
//       First name  :: ${jsonobj.fname}
//       Last Name   :: ${jsonobj.lname}
//       ID          :: ${jsonobj.id}
// `)
//2 using square operator
console.log("\n      First Name  :: ".concat(jsonobj["fname"], "\n      Last Name   :: ").concat(jsonobj['lname'], "\n      Id          :: ").concat(jsonobj["id"], "\n"));
jsonobj["fname"] = 'Sumit';
console.log("\n      First Name  :: ".concat(jsonobj["fname1"], "\n      Last Name   :: ").concat(jsonobj['lname'], "\n      Id          :: ").concat(jsonobj["id"], "\n"));
