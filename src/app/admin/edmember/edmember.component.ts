import { Component, OnInit } from '@angular/core';
import { MembereditremoveComponent } from './membereditremove/membereditremove.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { MemberprofileComponent } from './memberprofile/memberprofile.component';
import { MemberrequestComponent } from './memberrequest/memberrequest.component';

@Component({
  selector: 'app-edmember',
  templateUrl: './edmember.component.html',
  styleUrls: ['./edmember.component.css']
})
export class EdmemberComponent implements OnInit {
  add: any;
  profile: any;
  editandremove: any;
  list: any;
  request: any;
  constructor() { }

  ngOnInit(): void {
    this.list = true;
  }
  
   
   membereditremove = MembereditremoveComponent;
   memberprofile = MemberprofileComponent;
   memberrequest = MemberrequestComponent;
   memberlist = MemberlistComponent;


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
