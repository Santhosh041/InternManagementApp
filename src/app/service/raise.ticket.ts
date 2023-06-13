import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TicketModel } from "../raiseticket/model/ticket.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class RaiseTicketService{
    constructor(private httpClient :HttpClient){

    }

    RaiseTicket(ticket:TicketModel){
        console.log(ticket);
        return this.httpClient.post("http://localhost:5081/api/Ticket/Add Ticket",ticket);
        
    }

    // RaiseTicket(ticket: TicketModel): Observable<any> {
    //     const headers = new HttpHeaders({
    //       'Content-Type': 'application/json',
    //       'Authorization': 'Bearer ' + localStorage.getItem('token')
    //     });
    
    //     const url = 'https://localhost:7142/api/User/GetAllIntern';
    
    //     return this.httpClient.post<any>(url, ticket, { headers });
    //   }
    
}