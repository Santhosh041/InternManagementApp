import { Component } from '@angular/core';
import { TicketModel } from './model/ticket.model';
import { RaiseTicketService } from '../service/raise.ticket';

@Component({
  selector: 'app-raiseticket',
  templateUrl: './raiseticket.component.html',
  styleUrls: ['./raiseticket.component.css']
})

export class RaiseticketComponent {

  ticket:TicketModel

  constructor(private raiseTicketService:RaiseTicketService){

    this.ticket=new TicketModel();
    

  }
  raiseTicket(){
    console.log(parseInt(localStorage.getItem("UserID")));
    
    this.ticket.InternId=parseInt(localStorage.getItem("UserID"));
    this.raiseTicketService.RaiseTicket(this.ticket).subscribe(data=>{

    },
    err=>{
      console.log(err)
    });
  }
   

}
