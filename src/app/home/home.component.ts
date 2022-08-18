import { Component, OnInit ,TemplateRef} from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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
  constructor(private dataService:CommonserviceService,private modalService: BsModalService) { }
  openModal(template: TemplateRef<any>,data:any)
  
   { 
    this.modalRef = this.modalService.show(template);
    console.log(data)
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
    })
  }
  

  

}
