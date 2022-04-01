import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DummyComponent } from './dummy/dummy.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { LoginComponent } from './login/login.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'pagination',component:PaginationComponent, canActivate:[AuthGuard ]},
  {path:'dummy',component:DummyComponent, canActivate:[AuthGuard ]},
  {path: 'employeelist',component:EmployeeListComponent},
  {path: 'employee-list',component:EmployeelistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
