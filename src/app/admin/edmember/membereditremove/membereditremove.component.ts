import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-membereditremove',
  templateUrl: './membereditremove.component.html',
  styleUrls: ['./membereditremove.component.css']
})
export class MembereditremoveComponent implements OnInit {
  id: any;
  members: any;
  constructor(private sharedservice: SharedService) { }

  ngOnInit(): void {
    this.sharedservice.getMember().subscribe((members: any) => {
      console.log(members);
      this.members = members.data;
  }) 
    
    
  }

  editbutton(id:any){
    this.id = id;


  }
  edited_member(id:number, name:string, email:string, dob:string, player_type:string, mobile_number:string, address:string){
    this.id = 0;
    this.sharedservice.editmember(id,name,email,dob,player_type,mobile_number,address).subscribe((response: any) => {
      console.log(response);
    })
    const index = this.members.findIndex((req: any, index: any) =>{

      return req.id === id;
    })    
    //console.log(index);
    this.members[index] = {
      id: id,
      name : name,
      email : email,
      dob : dob,
      player_type : player_type,
      mobile_number : mobile_number,
      address : address}
  
    //console.log(this.members[index]);
    //console.log(this.members);
  }

  delete_member(id:number){
  
    console.log(id);
    this.sharedservice.DeleteMember(id).subscribe((response: any) => {
      console.log(response);
    })
    const index = this.members.findIndex((req: any, index: any) =>{
  
      return req.id === id;
    })    
   // console.log(index);
    this.members.splice(index,1);
  
  }
  


}
