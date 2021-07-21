import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { EdcoachComponent } from './edcoach/edcoach.component';
import { EdgroundComponent } from './edground/edground.component';
import { EdmemberComponent } from './edmember/edmember.component';
import { EdnoticeComponent } from './ednotice/ednotice.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  member:any;
  coach:any;
  ground:any;
  notice: any;
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
    this.member = true;
  }
  Email = localStorage.getItem('email');
  Name = localStorage.getItem('name');
  
  membercomponent = EdmemberComponent;
  coachcomponent = EdcoachComponent;
  groundcomponent = EdgroundComponent;
  noticecomponent = EdnoticeComponent;

assignComponent(component: string) {
  
  if (component === "member"){
   this.member =true;
   this.coach = false;
   this.ground = false;
   this.notice = false;
  }else if (component === "coach"){
   this.coach = true;
   this.member =false;
   this.ground = false;
   this.notice = false;
  }else if(component === "ground"){
  this.coach = false;
  this.ground = true;
  this.member =false;
  this.notice = false;
  }else if(component === "notice"){
    this.coach = false;
    this.notice = true;
    this.member =false;
    this.ground = false;
  }else {
    this.member = true;
    this.coach = false;
    this.ground = false;
    this.notice = false;
  }
}



}
