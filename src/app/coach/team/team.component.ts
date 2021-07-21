import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teams: any;
  members: any;
  id= localStorage.getItem('id');
  new_row: any;
  add: any;
  email: any;
  emails: any;
  names: any;
  team_selection = new FormControl();

 

  constructor(private sharedservice: SharedService) { }

  ngOnInit(): void {
    this.add= true;
    this.new_row = false;
    this.sharedservice.getTeam().subscribe((response: any) => {
      console.log(response);
      this.teams = response.data;
    })
  }


  add_button(){
    this.sharedservice.getMember().subscribe((response: any) => {
      console.log(response);
      this.members= response.data;
    })
    this.add = false;
    this.new_row= true;

  }
  added_button(team: string, members: any){
    this.add = true;
    this.new_row= false;
    for(let i=0; i<members.length; i++){
      if(!this.emails){
        this.emails=[members[i].email]
        this.names=[members[i].name]
      }else{
      this.emails.push(members[i].email);
      this.names.push(members[i].name);
    }
   

  
    } 
  
    
    console.log(this.emails)

    this.sharedservice.create_team(this.id, team, this.emails.toString(), this.names.toString()).subscribe((response: any) => {
      console.log(response);

      this.sharedservice.getTeamByName(team).subscribe((responses: any) => {
        console.log(responses)
     
        this.teams.push({
          id: responses.data.id,
          coach_id: responses.data.coach_id,
          tournament_name: team,
          team: this.emails.toString(),
          name: this.names.toString()
        })
        
  
  
      })
      console.log(this.teams)
  })
  }




  delete_button(id: any){
    this.sharedservice.delete_team(id).subscribe((response: any) => {
      console.log(response);
    })
    const index = this.teams.findIndex((req: any, index: any) =>{
  
      return req.id === id;
    })  
    this.teams.splice(index,1);

  }



}
