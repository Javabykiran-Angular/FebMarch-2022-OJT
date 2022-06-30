import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'summary',
  // pure:false  => it makes a impure pipe 
})
export class SummaryPipe implements PipeTransform
{
      transform(value: any,start:number=0,end:number=15) {

          let temp= (<string> value); 
          
        //  return (temp.substring(0,15)+" ...more");

        return (temp.substring(start,end)+" ...more");
      }
}