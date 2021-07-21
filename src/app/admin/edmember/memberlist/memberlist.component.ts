import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { MembereditremoveComponent } from '../membereditremove/membereditremove.component';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberlistComponent implements OnInit {
  members: any;

  constructor(private sharedservice: SharedService) { }

  ngOnInit(): void {
    this.sharedservice.getMember().subscribe((members: any) => {
      console.log(members);
      this.members = members.data;
  

      
    })  
  }




}
