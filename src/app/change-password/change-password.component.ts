import { Component } from '@angular/core';
import { ChangePasswordService } from '../service/change.password';
import { PasswordDTO } from './passwordDTO';
import { UserModel } from '../register/model/user.model';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})

export class ChangePasswordComponent {

  passwordDTO:PasswordDTO
  user:UserModel
  constructor(private changepasswordService : ChangePasswordService){
    this.passwordDTO=new PasswordDTO();
    this.user = new UserModel();
  }

  ChangePassword(){
    this.passwordDTO.userId=parseInt(localStorage.getItem("UserID"));
    console.log(this.changepasswordService.changepassword(this.passwordDTO).subscribe(data=>{
        this.user=data as UserModel;
        console.log(this.user);
    },
    err=>{
      console.log(err)
    }));
  }

}
