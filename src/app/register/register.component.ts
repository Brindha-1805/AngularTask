import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder ,Validator} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 UserForms: FormGroup;
 
 
 constructor( private router:Router) {
   const data = this.router.getCurrentNavigation()?.extras?.state?.['hello']
    console.log('inside the data',data)
 }
  register(){
  this.router.navigate(['/login'])}
 

  ngOnInit(): void {
     this.UserForms= new FormGroup({
        'Username':new FormControl('',Validators.required),
        'Email':new FormControl('',[Validators.required,Validators.email]),
        'password':new FormControl('',Validators.required)
     });

     

     
         
     

    }

    
  }


