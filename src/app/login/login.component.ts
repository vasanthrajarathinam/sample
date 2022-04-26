import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authClient:AuthGuard) {


   }
  typeOfPassword = "password";
  passwordVariable = "";
  userNameVariabe = "Default"
  ngOnInit(): void {
  }

  validatePassword(f:any) {

    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
    
    console.log(f);
    console.log(f.form.value);
    if (this.typeOfPassword == "password") {
      this.typeOfPassword = "text";
    }
    else {
      this.typeOfPassword = "password";
    }
  }

  ClearControls() {
    //alert("clearing contorls");
    this.passwordVariable = "";
    this.userNameVariabe = "";
  }

  LogMeIn() : void {
    this.authClient.isAccess=true;
    //alert("login success");

   

  }

}
