import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormComponent } from './componentes/form/form.component';
import { SidenavComponent } from './componentes/sidenav/sidenav.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Form1Component } from './components/form1/form1.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegFormComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    SidenavComponent,
    Form1Component,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
