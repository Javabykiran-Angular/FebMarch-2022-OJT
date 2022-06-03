//Array of Object  
var arrobj = [
    {
        fname: 'Sumit',
        lname: 'Raokhande',
        id: 9,
        country: {
            cid: 1,
            cname: 'India'
        },
        month: ["Jan", "Feb", 'Dec'],
        result: [
            {
                subj: 'M1',
                marks: 40
            },
            {
                subj: 'M2',
                marks: 45
            },
            {
                subj: 'M3',
                marks: 65
            }
        ]
    },
    {
        fname: 'Spruha',
        lname: 'Raokhande',
        id: 3,
        country: {
            cid: 2,
            cname: 'Austrila'
        },
        month: ["Jun", "July", 'Aug'],
        result: [
            {
                subj: 'M1',
                marks: 50
            },
            {
                subj: 'M2',
                marks: 55
            },
            {
                subj: 'M3',
                marks: 75
            }
        ]
    },
    {
        fname: 'Kiran',
        lname: 'Raokhande',
        id: 6,
        country: {
            cid: 3,
            cname: 'Japan'
        },
        month: ["May", "July"],
        result: [
            {
                subj: 'M1',
                marks: 49
            },
            {
                subj: 'M2',
                marks: 65
            },
            {
                subj: 'M3',
                marks: 85
            }
        ]
    }
];
for (var i = 0; i < arrobj.length; i++) {
    console.log("\n        First Name  :: ".concat(arrobj[i].fname, "\n        Last Name   :: ").concat(arrobj[i].lname, "\n        id          :: ").concat(arrobj[i].id, "\n        Country Name:: ").concat(arrobj[i].country.cname, "\n        Month       :: ").concat(arrobj[i].month.join('  '), "\n          -------------Result----------------\n    "));
    for (var j = 0; j < arrobj[i].result.length; j++) {
        console.log("\n              Subject :: ".concat(arrobj[i].result[j].subj, "\n              Marks   :: ").concat(arrobj[i].result[j].marks, "\n      "));
    }
}
