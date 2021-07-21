import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  display: any;
  button: any;
  edit: any;
  coach: any;
  id = localStorage.getItem('id');

  constructor(private sharedservice: SharedService) { }

  ngOnInit(): void {
      this.display = true;
      this.button = true;
      this.edit = false;
      this.sharedservice.getCoachById(this.id).subscribe((response: any) => {
        console.log(response);
        this.coach = response.data;
      })

  }

  edit_button(){
    this.display = false;
    this.edit = true;
  }
  edit_coach(id: number,name: string, email: string, coachtype: string, age: string, mobile: string){
    this.display = true;
    this.edit = false;
    this.coach.name= name;
    this.coach.email= email;
    this.coach.coachtype= coachtype;
    this.coach.age= age;
    this.coach.mobile= mobile;
    this.sharedservice.editCoach(id, email, name, coachtype, age, mobile).subscribe((response:any) => {
      console.log(response)

    })
  }


}
