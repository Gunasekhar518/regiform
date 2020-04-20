import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegFormComponent } from './reg-form/reg-form.component';
import { FormComponent } from './componentes/form/form.component';
import { Form1Component } from './components/form1/form1.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [{
  path : '',
  pathMatch : 'full',
  redirectTo : 'registrationForm'
},
{
  path : 'registrationForm',
  component : RegFormComponent
},
{
  path : 'form',
  component : Form1Component
},
{
  path : 'loginForm',
  component : LoginComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
