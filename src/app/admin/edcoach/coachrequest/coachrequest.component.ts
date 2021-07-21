import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-coachrequest',
  templateUrl: './coachrequest.component.html',
  styleUrls: ['./coachrequest.component.css']
})
export class CoachrequestComponent implements OnInit {
  requests: any;
  constructor(private sharedservice:SharedService) { }

  ngOnInit(): void {
    this.sharedservice.getCoachRequest().subscribe((respons: any) =>{
      console.log(respons);
      this.requests = respons.data;

    })
  }
  coach_status(accepted: string, id: any, email: string){
    const index = this.requests.findIndex(function(req: any, index: any){
      return req.gid === id
    }) 
     console.log(index);
     
     this.requests.splice(index,1);

    this.sharedservice.CoachStatus(accepted, id ,email).subscribe((response: any) => {
      console.log(response);
    })

  }





}
