import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { Employee } from '../model/employee';
import { DialogService } from '../dialog.service';
import { ToastrService  } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  p:number=1;
  nameSearch:string='';
 
  empdata:any[]=[];
  isradioCheck:boolean=false;

  empobj=<Employee>{};

  modalRef: BsModalRef;  
  config = {
    animated: true,
    
    ignoreBackdropClick: true,
    class: "alert alert-danger"
  };

  constructor(private service:HttpService,
    private modalservice:BsModalService,
    private dialogservice:DialogService,
    private toaster:ToastrService ) { }

  ngOnInit() {
   this.GetDataFromBackend();
  }

  GetDataFromBackend(){
      this.service.getEmployee()
      .subscribe((response)=>{
          this.empdata=(<any>response);
          console.log(this.empdata);
      })
  }

  onradio(item){
      this.isradioCheck=true;
      // console.log(item);
      this.empobj=item;
  }

  radioCheck(){
    if(this.isradioCheck)
    return true;
    else 
    return false;
  }

  OnUpdate(popup: TemplateRef<any>){
    if(this.radioCheck()){
        
    this.modalRef = this.modalservice.show(popup, this.config);
      
    }else{
      alert("Please Select a record To Update!!")
    }
  }

  onDelete(){
    if(this.radioCheck()){

      this.dialogservice.OpenConfirmDialog('Are you sure to delete this record?')
      .afterClosed()
      .subscribe((res)=>{
        console.log(res)
        if(res){
          //Delete a record
          this.service.DeleteRecord(this.empobj.id)
          .subscribe((response)=>{
            // console.log(response)
            this.toaster.success(response);
            this.GetDataFromBackend();
          })
        }
      })

    }else{
      // alert("Please Select a record to delete !!!");
      // this.toaster.error("Please Select a record to delete !!!")
      this.toaster.warning("Please Select a record to delete !!!")
    }
  }


}
