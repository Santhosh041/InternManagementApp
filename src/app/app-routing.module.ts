import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RaiseticketComponent } from './raiseticket/raiseticket.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { GetInternsComponent } from './get-interns/get-interns.component';
import { GetTicketsComponent } from './get-tickets/get-tickets.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GetProfileComponent } from './get-profile/get-profile.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'raiseTicket',component:RaiseticketComponent},
  {path:'ChangePassword',component:ChangePasswordComponent},
  {path:'getInterns',component:GetInternsComponent},
  {path:'getAllTickets',component:GetTicketsComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'profile',component:GetProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
