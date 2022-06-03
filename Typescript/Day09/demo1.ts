//Array of Object  

let arrobj=[
  {
    fname:'Sumit',
    lname:'Raokhande',
    id:9,
    country:{
      cid:1,
      cname:'India'
    },
    month:["Jan","Feb",'Dec'],
    result:[
      {
        subj:'M1',
        marks:40
      },
      {
        subj:'M2',
        marks:45
      },
      {
        subj:'M3',
        marks:65
      }
    ]
  },
  {
    fname:'Spruha',
    lname:'Raokhande',
    id:3,
    country:{
      cid:2,
      cname:'Austrila'
    },
    month:["Jun","July",'Aug'],
    result:[
      {
        subj:'M1',
        marks:50
      },
      {
        subj:'M2',
        marks:55
      },
      {
        subj:'M3',
        marks:75
      }
    ]
  },
  {
    fname:'Kiran',
    lname:'Raokhande',
    id:6,
    country:{
      cid:3,
      cname:'Japan'
    },
    month:["May","July"],
    result:[
      {
        subj:'M1',
        marks:49
      },
      {
        subj:'M2',
        marks:65
      },
      {
        subj:'M3',
        marks:85
      }
    ]
  }
]

for(let i=0;i<arrobj.length;i++){

    console.log(`
        First Name  :: ${arrobj[i].fname}
        Last Name   :: ${arrobj[i].lname}
        id          :: ${arrobj[i].id}
        Country Name:: ${arrobj[i].country.cname}
        Month       :: ${arrobj[i].month.join('  ')}
          -------------Result----------------
    `)

  for(let j=0;j<arrobj[i].result.length;j++){
      console.log(`
              Subject :: ${arrobj[i].result[j].subj}
              Marks   :: ${arrobj[i].result[j].marks}
      `)
  }

}