import { Component } from '@angular/core';
import { TicketModel } from '../raiseticket/model/ticket.model';
import { AdminService } from '../service/admin.service';
import { SolutionModel } from '../raiseticket/model/solution.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-tickets',
  templateUrl: './get-tickets.component.html',
  styleUrls: ['./get-tickets.component.css']
})
export class GetTicketsComponent {

  roleStatus:boolean=false
  tickterId:number=0;
  tickets:TicketModel[]
  ticketSolvestatus:boolean=false
  ticketToSolve:TicketModel
  solution:SolutionModel
  solutionString:string=""

  constructor(private adminService:AdminService,private router:Router){
    
    if(localStorage.getItem("role")=="Admin"){
      this.roleStatus=true
    }
    this.tickterId=0
    this.solution=new SolutionModel()
    this.adminService.GetAllTickets().subscribe(data=>{
      this.tickets=data as TicketModel[];
      console.log(this.tickets)
    })
  }

  ViewTicket(ticket:TicketModel){

      this.ticketSolvestatus=true
      this.ticketToSolve=ticket

      this.solution.ticketId=this.ticketToSolve.id;
      this.solution.adminId=parseInt(localStorage.getItem("UserID"));

  }

  SolutionTicket(){
    this.solution.solution=this.solutionString
    this.adminService.ProvideSolution(this.solution).subscribe(data=>{
      this.solution=data as SolutionModel
      console.log(this.solution)
    })
    this.ticketSolvestatus=false
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
  raiseTicket(){
    this.router.navigateByUrl('raiseTicket')
  }
  getTicketDetails(){

  }

  logout(){
    localStorage.setItem("logout", new Date().toDateString());
    localStorage.setItem("role","");
    this.router.navigateByUrl('login');
  }
}
