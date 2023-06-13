import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class InternService{
    constructor(private httpClient:HttpClient){
        
    }

    GetInternAllTicket(){
        var header=new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
        });
        return this.httpClient.get("",{headers:header})
        }

    Getprofile(id:number){
        // const headers = new HttpHeaders({
        //     'Content-Type': 'application/json',
        //     'Authorization': 'Bearer ' + localStorage.getItem('token')
        //   });
      
        //   const url = 'http://localhost:5081/api/Solution/Add Solution ';
      
        //   console.log("hello")
        //   return this.httpClient.post<any>(url, id, { headers });
        // }

        var header=new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
        });
        return this.httpClient.get(`https://localhost:7142/api/User/Get Profile?id=${id}`,{headers:header})
    }
}