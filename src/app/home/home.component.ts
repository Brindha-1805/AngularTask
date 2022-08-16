import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 showFlag = false;
 arrData:any
  constructor(private dataService:CommonserviceService) { }
  showStyle(){
    this.showFlag=true
  }

  ngOnInit(): void {
    this.dataService.MyData().subscribe(Response=>{
      console.log('inside the data',Response)
      this.arrData=Response
    })
  }

}
