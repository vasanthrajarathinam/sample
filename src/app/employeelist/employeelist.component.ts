import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnyForUntypedForms } from '@angular/forms';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employeeDetails :any;

  constructor(private myHttpClient: HttpClient) { }

  ngOnInit(): void {

    this.myHttpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (data: any) => {

        console.log(data);
        this.employeeDetails = data;

      }
    );


  }

}
