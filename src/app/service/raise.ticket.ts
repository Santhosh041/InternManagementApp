import { HttpClient } from "@angular/common/http";
import { TicketModel } from "../raiseticket/model/ticket.model";
import { Injectable } from "@angular/core";

@Injectable()
export class RaiseTicketService{
    constructor(private httpClient :HttpClient){

    }

    RaiseTicket(ticket:TicketModel){
        console.log(ticket);
        return this.httpClient.post("https://localhost:7142/api/User/Register",ticket);
        
    }
}