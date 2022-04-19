import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnyForUntypedForms } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employeemodel } from '../models/employee.model';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employeeDetails :any;

  employeeArray :Employeemodel[];

  constructor(private myHttpClient: HttpClient, private emp : EmployeeService) {
    this.employeeArray = emp.employeeArray

  }

  ngOnInit(): void {

    // this.myHttpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(
    //   (data: any) => {

    //     console.log(data);
    //     this.employeeDetails = data;

    //   }
    // );
  }

  view(index:number){

    console.log(this.employeeArray[index]);
    this.emp.selectedEmployee = index;
    //alert(index);

  }

}
