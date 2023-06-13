import { Component } from '@angular/core';
import { UserDTO } from '../register/model/userDTO.model';
import { InternRegisterService } from '../service/intern.register';
import { LoggedInUserModel } from '../register/model/loggedinuser.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userDTO:UserDTO
  loggedInUser:LoggedInUserModel

  constructor(private internRegisterService : InternRegisterService,private userService:InternRegisterService , private router : Router){
    this.userDTO=new UserDTO();
    this.loggedInUser=new LoggedInUserModel
  }
  Login(){

    this.internRegisterService.userLogin(this.userDTO).subscribe(data=>{
      
      this.loggedInUser = data as LoggedInUserModel;
      console.log(this.loggedInUser);
      
      localStorage.setItem("token",this.loggedInUser.token);
      localStorage.setItem("UserID",this.loggedInUser.userId.toString());
      localStorage.setItem("role",this.loggedInUser.role);
      localStorage.setItem("login", new Date().toDateString());
      alert("Login Successful")
      this.router.navigateByUrl('homepage');
    },
    err=>{
      console.log(err)
    });
  }

  move(){
    this.router.navigateByUrl('register');
  }
}
