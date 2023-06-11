import { HttpClient } from "@angular/common/http";

import {Injectable} from '@angular/core';
import { InternModel } from "../register/model/intern.model";
import { UserDTO } from "../register/model/userDTO.model";

@Injectable()
export class InternRegisterService{

    constructor(private httpClient:HttpClient){

    }
    createIntern(intern:InternModel){
        return this.httpClient.post("https://localhost:7142/api/User/Register",intern);
    }

    userLogin(userDTO:UserDTO){
        return this.httpClient.post("https://localhost:7142/api/User/Login",userDTO);
    }
}