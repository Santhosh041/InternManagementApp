import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RaiseticketComponent } from './raiseticket/raiseticket.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'raiseTicket',component:RaiseticketComponent},
  {path:'ChangePassword',component:ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
