import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ProfileComponent } from './profile/profile.component';
import { RecordComponent } from './record/record.component';
import { TeamComponent } from './team/team.component';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {
  profile: any;
  record: any;
  team: any;
  coach: any;
  id = localStorage.getItem('id');

  
  constructor(private sharedservice: SharedService) { }

  ngOnInit(): void {
    this.profile =true;
    this.sharedservice.getCoachById(this.id).subscribe((response: any) => {
      console.log(response);
      this.coach = response.data;
    })
  }

  coach_profile = ProfileComponent;
  member_record = RecordComponent;
  team_selection = TeamComponent;

  assignComponent(component: string) {
  
    if (component === "profile"){
     this.profile =true;
     this.record = false;
     this.team = false;
    }else if (component === "record"){
     this.record = true;
     this.profile =false;
     this.team = false;
    }else if(component === "team"){
    this.record = false;
    this.team = true;
    this.profile =false;
    }else {
      this.profile = true;
      this.record = false;
      this.team = false;
    }
  }
  

}
