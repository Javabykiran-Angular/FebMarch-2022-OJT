
export class Student{

    
  
  constructor(public fname:string,protected lname:string,private id:number){

  }

  display(){

    console.log(`
          First Name  :: ${this.fname}
          Last name   :: ${this.lname}
          Id          :: ${this.id}
    `)
  }



}