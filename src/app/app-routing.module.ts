import { Component, NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
  path:'', 
component:HomeComponent} ,
{ 
path:'employees',
component:EmployeeComponent
} , 
{
  path:'add-employee' ,
  component:CreateComponent
},

{ 
  path:'view/:id',
  component:ViewComponent
  } ,

  { 
    path:'update-employee',
    component:UpdateComponent
    } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
