import { Component } from '@angular/core';
import { UserDTO } from '../register/model/userDTO.model';
import { InternRegisterService } from '../service/intern.register';
import { LoggedInUserModel } from '../register/model/loggedinuser.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userDTO:UserDTO
  loggedInUser:LoggedInUserModel

  constructor(private internRegisterService : InternRegisterService,private userService:InternRegisterService){
    this.userDTO=new UserDTO();
    this.loggedInUser=new LoggedInUserModel
  }
  Login(){

    this.internRegisterService.userLogin(this.userDTO).subscribe(data=>{
      
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
