import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 SignupForms:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.SignupForms=new FormGroup({
      'Email id':new FormControl('',Validators.required),
      'PassWord':new FormControl('',Validators.required),
      'Confirmpaswd':new FormControl('',Validators.required)
    })
  }

}
