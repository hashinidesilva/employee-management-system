import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { HomeComponent } from './home/home.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';


const routes: Routes = [
    {path: 'home',component:HomeComponent},
    {path: '', redirectTo:'home', pathMatch:'full' },
    {path:'form/:employee' , component:EmployeeFormComponent},
    {path:'search', component:SearchEmployeeComponent},
    {path:'view/:employee', component:ViewEmployeeComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }