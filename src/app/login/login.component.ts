import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  typeOfPassword = "password";
  passwordVariable = "";
  userNameVariabe = "Default"
  ngOnInit(): void {
  }

  validatePassword() {
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

}
