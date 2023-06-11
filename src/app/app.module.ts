import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InternRegisterService } from './service/intern.register';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RaiseticketComponent } from './raiseticket/raiseticket.component';
import { RaiseTicketService } from './service/raise.ticket';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangePasswordService } from './service/change.password';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    RaiseticketComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [InternRegisterService,RaiseTicketService, ChangePasswordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
