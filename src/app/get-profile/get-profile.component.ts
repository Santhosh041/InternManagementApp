import { Component } from '@angular/core';
import { InternModel } from '../register/model/intern.model';
import { InternService } from '../service/intern.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-profile',
  templateUrl: './get-profile.component.html',
  styleUrls: ['./get-profile.component.css']
})
export class GetProfileComponent {

  user:InternModel
  userId:number
  roleStatus:boolean=false

  constructor(private internService:InternService , private router:Router){
    if(localStorage.getItem("role")=="Admin"){
      this.roleStatus=true
    }

    this.userId=parseInt(localStorage.getItem("UserID"));
    this.internService.Getprofile(this.userId).subscribe(data=>{
      this.user=data as InternModel
    })
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
  close(){
    this.router.navigateByUrl('homepage');
  }

  logout(){
    localStorage.setItem("logout", new Date().toDateString());
    localStorage.setItem("role","");
    this.router.navigateByUrl('login');
  }
}
