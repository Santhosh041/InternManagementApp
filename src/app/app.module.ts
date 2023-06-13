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
import { GetInternsComponent } from './get-interns/get-interns.component';
import { AdminService } from './service/admin.service';
import { GetTicketsComponent } from './get-tickets/get-tickets.component';
import { InternService } from './service/intern.service';
import { HomepageComponent } from './homepage/homepage.component';
import { GetProfileComponent } from './get-profile/get-profile.component';
import { SingleInternComponent } from './single-intern/single-intern.component';
import { SingleTicketComponent } from './single-ticket/single-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    RaiseticketComponent,
    ChangePasswordComponent,
    GetInternsComponent,
    GetTicketsComponent,
    HomepageComponent,
    GetProfileComponent,
    SingleInternComponent,
    SingleTicketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [InternRegisterService,RaiseTicketService, ChangePasswordService,AdminService,InternService],
  bootstrap: [AppComponent]
})
export class AppModule { }
