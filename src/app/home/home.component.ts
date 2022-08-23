import { Component, OnInit ,TemplateRef,} from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html' ,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 showFlag = false;
 arrData: any;
 editData : {}
 modalRef: BsModalRef;
 CurrentItem:"hello world";
 Id :number
 Title:string
 UserForm:FormGroup

  constructor(private dataService:CommonserviceService,private modalService: BsModalService,private route:Router) { }
  openModal(template: TemplateRef<any>,data:any)
  {   
 
    this.modalRef = this.modalService.show(template);
    console.log(data)
    
    this.Id = data.id;
    this.Title = data.title;
    console.log(this.Id,this.Title);
   
 }
  showStyle(){
    this.showFlag= true;
  }

  ngOnInit(): void {
    this.dataService.MyData().subscribe(Response => {
       const responseData= Response
       console.log('inside the data',typeof(responseData),)
      this.arrData = Response
      // this.arrData = Response && Response.data
    });
    localStorage.setItem('SeesionUser','Bindhu') 
  //   this.UserForm = new  FormGroup({
  //     Title:new FormControl(""),
  //     Id:new FormControl(),
  
  // });
  }
  addItem(data:any){
    console.log('data come from',data)
  }
 
  deleteModel(): void{
    this.route.navigateByUrl('/register', { state: { hello: 'world' } });
  }
  onClickSubmit(updatedData:object):void{
    console.log('inside the data',updatedData)
   this.dataService.updateData(updatedData).subscribe(result=>{
     console.log('result',result)
     
     
    })
    this.modalService.hide();
    
  }
  
   
 }
  
  

