import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegFormComponent } from './reg-form/reg-form.component';
import { FormComponent } from './componentes/form/form.component';
import { LoginComponent } from './componentes/login/login.component';


const routes: Routes = [{
  path : '',
  pathMatch : 'full',
  redirectTo : 'home'
},
{
  path : 'home',
  component : RegFormComponent,
  children : [{
    path : 'form',
    component : FormComponent
  },
  {
    path : 'loginForm',
    component : LoginComponent
  }
]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
