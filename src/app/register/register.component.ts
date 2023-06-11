import { Component } from '@angular/core';
import { InternModel } from './model/intern.model';
import { LoggedInUserModel } from './model/loggedinuser.model';
import { InternRegisterService } from '../service/intern.register';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  intern:InternModel;
  loggedInUser:LoggedInUserModel;

  constructor(private internRegisterService:InternRegisterService){
    this.intern=new InternModel();
    this.loggedInUser=new LoggedInUserModel();
  }

  addGender(gender:any){
    this.intern.gender = gender;
  }

  addIntern(){

    this.internRegisterService.createIntern(this.intern).subscribe(data=>{
      
      this.loggedInUser = data as LoggedInUserModel;
      console.log(this.loggedInUser);
      
      localStorage.setItem("token",this.loggedInUser.token);
      localStorage.setItem("UserID",this.loggedInUser.userId.toString());
    },
    err=>{
      console.log(err)
    });
  }
}
