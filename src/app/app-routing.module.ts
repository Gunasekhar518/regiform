import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegFormComponent } from './reg-form/reg-form.component';


const routes: Routes = [{
  path : '',
  pathMatch : 'full',
  redirectTo : 'registrationForm'
},
{
  path : 'registrationForm',
  component : RegFormComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
