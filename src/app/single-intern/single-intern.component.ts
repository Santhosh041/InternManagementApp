import { Component, Input } from '@angular/core';
import { InternModel } from '../register/model/intern.model';
import { AdminService } from '../service/admin.service';
import { ChangeStatusModel } from '../get-interns/intern.change';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-intern',
  templateUrl: './single-intern.component.html',
  styleUrls: ['./single-intern.component.css']
})
export class SingleInternComponent {

  @Input() intern:InternModel;
  temp:ChangeStatusModel;

  constructor(private adminService:AdminService,private router : Router){
    this.temp=new ChangeStatusModel()
    
  }

  changeStatus(Userid:number)
  {
    this.temp.id=Userid;
    console.log(this.temp)
    this.adminService.ChangeInternStatus(this.temp).subscribe(data=>{

    })
    alert("changed");
    }
  }



