import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employeemodel } from '../models/employee.model';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {


  employee : Employeemodel;

  constructor( private empService: EmployeeService) {
     this.employee=empService.employeeArray[2];
  }

  ngOnInit(): void {
  }

}
