import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ednotice',
  templateUrl: './ednotice.component.html',
  styleUrls: ['./ednotice.component.css']
})
export class EdnoticeComponent implements OnInit {
 notices: any;
 id: any;
 display: any;
 add: any;
 nid: any;
 message: any;
  constructor(private sharedservice: SharedService) { }

  ngOnInit(): void {
    this.sharedservice.getNotice().subscribe((response: any) => {
      console.log(response);
      this.notices= response.data;
      this.display = false;
      this.add = true;
    
    })


    

  }
  editbutton(id:any){
    this.id = id;


  }

  edited_member(id:number, event:string, link:string){
    this.id = 0;
    this.sharedservice.update_notice(event,link,id).subscribe((response: any) => {
      console.log(response);
    })
    const index = this.notices.findIndex((req: any, index: any) =>{

      return req.nid === id;
    })    
    //console.log(index);
    this.notices[index] = {
      nid: id,
      event_name : event,
      link : link
    }
  
  
  }

displaybutton(){
  this.display = true;
  this.add = false;
}

close_button(){
  this.add = true;
  this.display = false;
  
}

addbutton(event: string, link: string){
  this.display = true;
  
  this.message ="";
  
  if(event !="" && link !="" ){
    this.sharedservice.create_notice(event,link).subscribe((respons: any) => {
     console.log(respons);
     this.sharedservice.getNoticeByName(event).subscribe((response: any) => {
      console.log(response);
      this.nid = response.data;
      this.notices.push({
        nid: this.nid.nid,
        event_name : event,
         link : link
      }); 
    })
    })
    this.add = true;
    this.display = false;

   

  } else {
    this.message = "Enter The Values in Input field";

  }

 }


 delete_notice(id:number){
  
  console.log(id);
  this.sharedservice.delete_notice(id).subscribe((response: any) => {
    console.log(response);
  })
  const index = this.notices.findIndex((req: any, index: any) =>{

    return req.nid === id;
  })    
 // console.log(index);
  this.notices.splice(index,1);

}


}
