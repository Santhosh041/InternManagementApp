import { Component } from '@angular/core';
import { InternModel } from './model/intern.model';
import { LoggedInUserModel } from './model/loggedinuser.model';
import { InternRegisterService } from '../service/intern.register';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  intern:InternModel;
  loggedInUser:LoggedInUserModel;

  constructor(private internRegisterService:InternRegisterService, private router :Router){
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
      localStorage.setItem("role",this.loggedInUser.role);
      alert(`\t ........Registration successfull........
        \n your user id is : ${this.loggedInUser.userId} and your password is first 4 letters of your name + your birth date and month `);
      this.router.navigateByUrl('homepage');
    },
    err=>{
      console.log(err)
    });
  }
}
