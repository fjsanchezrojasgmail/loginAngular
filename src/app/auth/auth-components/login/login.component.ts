import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  isSpinning: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginService: AuthService
  ){

    this.loginForm = this.fb.group({
     
      email: [null, [Validators.required,Validators.email]],
      password: [null, [Validators.required]],
   
    })

  }

  ngOnInit(): void {
    
  }

  login(){
    this.loginService.login(this.loginForm.value).subscribe((data) =>{
      if(data){
        console.log(data);
      }
    })
    
  }

}
