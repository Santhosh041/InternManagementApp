import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  roleStatus:boolean=false

  constructor(private router:Router){
    if(localStorage.getItem("role")=="Admin"){
      this.roleStatus=true
    }
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
