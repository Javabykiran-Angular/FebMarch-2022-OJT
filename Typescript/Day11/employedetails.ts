
import {Employee} from './employee';
import {Department} from './department';
export class EmployeDetails implements Employee
{
        lname: string;
        fname: string;
        salary:number;
        dept:Department;

        constructor(f:string,l:string,sal:number,role:string){
          this.fname=f;
          this.lname=l;
          this.salary=sal;
          this.dept=new Department(role);
        }

    Display() {
        console.log(`
              -------------Employee Details----------
              First name  :: ${this.fname}
              Last Name   :: ${this.lname}
              Salary      :: ${this.salary}
              Role        :: ${this.dept.getRole()}
        `)
    }

}