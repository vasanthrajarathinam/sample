import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private fb:FormBuilder) {
    this.signupForm =this.fb.group({
      username: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      password: new FormControl()
    })
   }
  ngOnInit(): void {
  }

  signup (): void{
    alert('signup');
    console.log(this.signupForm);
    console.log(this.signupForm.value);
  }

}
