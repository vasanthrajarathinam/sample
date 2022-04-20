import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from '../test/test.component';
import { EmployeeComponent } from './employee.component';
import { Test2Component } from './test2/test2.component';

const routes: Routes = [

  { path: '', component: EmployeeComponent },
  { path: 'test', component: TestComponent },
  { path: 'test2', component: Test2Component }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
