import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  isSpinning: boolean = false;

  constructor(
      private fb: FormBuilder,
      private authService: AuthService
    ){

    this.signupForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required,Validators.email]],
      password: [null, [Validators.required], this.confirmationValidator],
      confirmPassword: [null, [Validators.required]],
    })

  }

  ngOnInit(): void {
    
  }

  confirmationValidator = async ( control: FormControl ): Promise<{ [s: string]: boolean; }> => {
    if(!control.value)
        return { require: true };
    else if(control.value !== this.signupForm.controls["password"].value) 
        return { confirm: true, error: true };
    return {};
  }


  signUp(){
    
    this.authService.register(this.signupForm.value).subscribe((data) =>{
      if(data){
        console.log(data);
      }
    })
  }

}
