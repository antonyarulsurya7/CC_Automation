import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
 member_id: any;
 member: any;
 record: any;
id = localStorage.getItem('id');
Name = localStorage.getItem('name');
display: boolean = true;
  constructor(private sharedservice: SharedService) { }
   
 
  ngOnInit(): void {
    console.log(this.id)
    this.sharedservice.getMemberById(this.id).subscribe((member:any) => {
      console.log(member);
      this.member = member.data;
      this.sharedservice.get_member_record(this.id).subscribe((record:any) => {
        console.log(this.id)
        console.log(record);

        this.record = record.data[0];
      })
    })
    

    
  }
  
 





}
