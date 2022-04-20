import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { TestComponent } from '../test/test.component';
import { Test2Component } from './test2/test2.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    TestComponent,
    Test2Component
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
