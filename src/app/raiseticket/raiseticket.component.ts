import { Component } from '@angular/core';
import { TicketModel } from './model/ticket.model';
import { RaiseTicketService } from '../service/raise.ticket';
import { Router } from '@angular/router';

@Component({
  selector: 'app-raiseticket',
  templateUrl: './raiseticket.component.html',
  styleUrls: ['./raiseticket.component.css']
})

export class RaiseticketComponent {

  ticket:TicketModel
  OutputTicket:TicketModel
  roleStatus:boolean=false

  constructor(private raiseTicketService:RaiseTicketService,private router:Router)
  {
    if(localStorage.getItem("role")=="Admin"){
      this.roleStatus=true
    }
    this.ticket=new TicketModel();
    this.OutputTicket=new TicketModel();

  }  

  addPriority(priority:any){
    this.ticket.priority=priority
  }

  addCategory(category:any){
    this.ticket.category=category
  }

  getInterns(){
    this.router.navigateByUrl('getInterns')
  }
  getTickets(){
    this.router.navigateByUrl('getAllTickets')
  }
  
  logInTimes(){

  }
  viewProfiles(){
    this.router.navigateByUrl('profile')
  }
  raiseTicketpage(){
    this.router.navigateByUrl('raiseTicket')
  }
  getTicketDetails(){

  }

  logout(){
    localStorage.setItem("logout", new Date().toDateString());
    localStorage.setItem("role","");
    this.router.navigateByUrl('login');
  }


  raiseTicket(){
    
    console.log(parseInt(localStorage.getItem("UserID")));
    
    this.ticket.internId=parseInt(localStorage.getItem("UserID"));
    this.raiseTicketService.RaiseTicket(this.ticket).subscribe(data=>{
      this.OutputTicket= data as TicketModel;
    },
    err=>{
      console.log(err)
    });
  }
   

}
