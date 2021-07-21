import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-coachlist',
  templateUrl: './coachlist.component.html',
  styleUrls: ['./coachlist.component.css']
})
export class CoachlistComponent implements OnInit {
  coaches: any;
  constructor(private sharedservice: SharedService) { }

  ngOnInit(): void {
    this.sharedservice.getCoach().subscribe((coaches: any) => {
      console.log(coaches);
      this.coaches = coaches.data;
 

      
    })  

  }

}
