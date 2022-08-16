import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  forms = new FormGroup({
    Username : new FormControl("",Validators.required),
    Email:new FormControl( '',[Validators.required,Validators.email]),
    Password:new FormControl('',Validators.required),
    confirmpassword:new FormControl('',Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

}
