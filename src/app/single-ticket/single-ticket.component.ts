import { Component, Input } from '@angular/core';
import { TicketModel } from '../raiseticket/model/ticket.model';
import { AdminService } from '../service/admin.service';
import { Router } from '@angular/router';
import { SolutionModel } from '../raiseticket/model/solution.model';

@Component({
  selector: 'app-single-ticket',
  templateUrl: './single-ticket.component.html',
  styleUrls: ['./single-ticket.component.css']
})
export class SingleTicketComponent {

  @Input() ticket:TicketModel
  solution:SolutionModel
  solutionString:string=""
  ticketToSolve:TicketModel
  solutionStatus:boolean=false

  constructor(private adminService:AdminService,private router : Router){
    this.ticketToSolve=new TicketModel()
    this.solution=new SolutionModel
  }
  GetSolution(){
    this.solutionStatus=true
  }

  SolutionTicket(ticket){
    console.log(this.solution)
    this.ticketToSolve=ticket
    this.solution.ticketId=this.ticketToSolve.id
    this.solution.solution=this.solutionString
    this.solution.adminId=parseInt(localStorage.getItem("UserID"));
    
    this.adminService.ProvideSolution(this.solution).subscribe(data=>{
      this.solution=data as SolutionModel
      console.log(this.solution)
    })
    
  }
}
