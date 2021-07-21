import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { AddcoachComponent } from './addcoach/addcoach.component';
import { CoacheditandremoveComponent } from './coacheditandremove/coacheditandremove.component';
import { CoachlistComponent } from './coachlist/coachlist.component';
import { CoachprofileComponent } from './coachprofile/coachprofile.component';
import { CoachrequestComponent } from './coachrequest/coachrequest.component';

@Component({
  selector: 'app-edcoach',
  templateUrl: './edcoach.component.html',
  styleUrls: ['./edcoach.component.css']
})
export class EdcoachComponent implements OnInit {
  
  add: any;
  profile: any;
  editandremove: any;
  list: any;
  request: any;

  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
    this.list = true;
  }
  coachprofile = CoachprofileComponent;
  coachlist = CoachlistComponent;
  coacheditremove = CoacheditandremoveComponent;
  coachrequest = CoachrequestComponent;

  assignComp(component: string) {
    if (component === "editandremove"){
    this.editandremove = true;
    this.add =false;
    this.request = false;
    this.profile = false;
    this.list = false;
   }else if(component === "profile"){
   this.profile = true;
   this.editandremove = false;
   this.request =false;
   this.add = false;
   this.list = false;
   }else if(component === "request"){
     this.list = false;
     this.request = true;
     this.profile =false;
     this.editandremove = false;
     this.add = false;
   }else if(component === "list"){
     this.editandremove = false;
     this.list = true;
     this.add =false;
     this.request = false;
     this.profile = false;
   }else {
     this.list = true;
     this.profile = false;
     this.editandremove = false;
     this.add = false;
     this.request = false;
   }
 }

}
