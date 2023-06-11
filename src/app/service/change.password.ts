import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PasswordDTO } from "../change-password/passwordDTO";

@Injectable()
export class ChangePasswordService{
    constructor(private httpClient:HttpClient){
    }
    changepassword(passwordDTO:PasswordDTO){
        return this.httpClient.put("https://localhost:7142/api/User/Change Password",passwordDTO);
    }
}