import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-tournement',
  templateUrl: './tournement.component.html',
  styleUrls: ['./tournement.component.css']
})
export class TournementComponent implements OnInit {
  message: any;
  Email: any;
  constructor(private sharedservice: SharedService) { }

  ngOnInit(): void {
    this.Email= localStorage.getItem('email');
  }

  
  tournament(type: string , from: string,to: string, email: string, event: string){
    this.sharedservice.bulkbook(type, from, to, email, event).subscribe((response:any) => {
      console.log(response);
      this.message = response.message;
    })
 }

}
