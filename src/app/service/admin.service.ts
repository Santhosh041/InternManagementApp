import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ChangeStatusModel } from "../get-interns/intern.change";
import { Observable } from "rxjs";
import { SolutionModel } from "../raiseticket/model/solution.model";
import { LoginModel } from "../login/login.model";

@Injectable()
export class AdminService{

    
    constructor(private httpClient:HttpClient){
        
    }

    GetAllIntern(){
        var header=new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
        });
        return this.httpClient.get("https:localhost:7142/api/User/Get All Intern",{headers:header})
        }

    ChangeInternStatus(temp: ChangeStatusModel): Observable<any> {
        console.log(temp)
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
    
        const url = 'https://localhost:7142/api/User/Change Status ';
    
        return this.httpClient.put<any>(url, temp, { headers });
      }

      GetAllTickets(){
        var header=new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
        });
        return this.httpClient.get("http://localhost:5081/api/Ticket/Get All Ticket",{headers:header})
        }


        ProvideSolution(solution:SolutionModel):Observable<any>{
          const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          });
      
          const url = 'http://localhost:5081/api/Solution/Add Solution ';
      
          console.log("hello")
          return this.httpClient.post<any>(url, solution, { headers });
        }

        SetLoginTime(login:LoginModel):Observable<any>{
          const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          });
      
          const url = 'https://localhost:7142/api/User/LogIn Time';
      
          console.log("hello")
          return this.httpClient.post<any>(url, login, { headers });
        }



}