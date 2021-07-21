import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-coacheditandremove',
  templateUrl: './coacheditandremove.component.html',
  styleUrls: ['./coacheditandremove.component.css']
})
export class CoacheditandremoveComponent implements OnInit {
  id: any;
  coaches: any;

  constructor(private sharedservice: SharedService) { }

  ngOnInit(): void {
    this.sharedservice.getCoach().subscribe((coaches: any) => {
      console.log(coaches);
      this.coaches = coaches.data;
  }) 

  }


  editbutton(id:any){
    this.id = id;


  }
  edited_coach(id:number, name:string, email:string, age:string, coachtype:string, mobile_number:string ){
 
    this.sharedservice.editCoach( id,email,name,coachtype,age,mobile_number ).subscribe((response: any) => {

      console.log(response);
    })
 
    this.id = 0;
    const index = this.coaches.findIndex((req: any, index: any) =>{

      return req.cid === id;
    })    
    console.log(index);
    this.coaches[index] = {
      cid: id,
      name : name,
      email : email,
      age : age,
      coachtype : coachtype,
      mobile_number : mobile_number
    }
  
    console.log(this.coaches[index]);
    console.log(this.coaches);
  }

delete_coach(id:number){

  this.sharedservice.DeleteCoach(id).subscribe((response: any) => {
    console.log(response);
  })
  const index = this.coaches.findIndex((req: any, index: any) =>{

    return req.cid === id;
  })    
  console.log(index);
  this.coaches.splice(index,1);

}




}
