import { Component } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { InternModel } from '../register/model/intern.model';
import { ChangeStatusModel } from './intern.change';
import { Router } from '@angular/router';
import { LoginModel } from '../login/login.model';


@Component({
  selector: 'app-get-interns',
  templateUrl: './get-interns.component.html',
  styleUrls: ['./get-interns.component.css']
})
export class GetInternsComponent {

  roleStatus:boolean=false
  interns : InternModel[];
  temp:ChangeStatusModel
  log:LoginModel

  constructor(private adminService:AdminService,private router:Router){

    if(localStorage.getItem("role")=="Admin"){
      this.roleStatus=true
    }

    this.log=new LoginModel()
    this.temp=new ChangeStatusModel()
    this.adminService.GetAllIntern().subscribe(data=>{
      this.interns=data as InternModel[];
      console.log(this.interns)
    })
  }

  ChangeStatus(internID : number){
    this.temp.id=internID;
    
    this.adminService.ChangeInternStatus(this.temp).subscribe(data=>{
      
    })
    alert("changed");
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
    this.log.userid=parseInt(localStorage.getItem("UserID"));
    this.log.login=new Date(localStorage.getItem("login"))
    this.log.logout=new Date(localStorage.getItem("logout"))

    this.adminService.SetLoginTime(this.log).subscribe(data=>{

    })
    console.log(this.log)
    this.router.navigateByUrl('login');

  }

}
