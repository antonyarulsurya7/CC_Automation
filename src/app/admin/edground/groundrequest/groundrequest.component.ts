import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-groundrequest',
  templateUrl: './groundrequest.component.html',
  styleUrls: ['./groundrequest.component.css']
})
export class GroundrequestComponent implements OnInit {
 requests: any;
  constructor(private sharedservice: SharedService) { }

  ngOnInit(): void {
    this.sharedservice.getGroundRequest().subscribe((respons: any) =>{
      console.log(respons);
      this.requests = respons.data;

    })
  }
  ground_status(status: string, id: any, email: string){
   
   const index = this.requests.findIndex(function(req: any, index: any){
     return req.gid === id
   }) 
    console.log(index);
    
    this.requests.splice(index,1);
    this.sharedservice.groundStatus(status, id, email).subscribe((response: any) => {
      console.log(response);
      
    })

  }

}
