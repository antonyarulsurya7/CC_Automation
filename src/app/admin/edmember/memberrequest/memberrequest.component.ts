import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-memberrequest',
  templateUrl: './memberrequest.component.html',
  styleUrls: ['./memberrequest.component.css']
})
export class MemberrequestComponent implements OnInit {
  requests: any;

  
  constructor(private sharedservice: SharedService) { }

  ngOnInit(): void {
    this.sharedservice.getRequest().subscribe((requests: any) => {
      console.log(requests);
      this.requests = requests.data;

    })
  }

  member_status(accepted: string, id: any, email: string) {

    const index = this.requests.findIndex(function(req: any, index: any){
      return req.gid === id
    }) 
     console.log(index);
     
     this.requests.splice(index,1);
    this.sharedservice.memberStatus(accepted, id, email).subscribe((respons: any) => {
      console.log(respons);


      
    })

  }


}

