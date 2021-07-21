import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-half-day',
  templateUrl: './half-day.component.html',
  styleUrls: ['./half-day.component.css']
})
export class HalfDayComponent implements OnInit {
  message: any;
  Email: any;
  constructor(private sharedservice: SharedService) { }

  ngOnInit(): void {
    this.Email = localStorage.getItem('email');
    this.sharedservice.getBooking().subscribe((response: any) => {
      console.log(response);
    })
  }

halfday(type: string , from: string, email: string, event: string){
  
   this.sharedservice.daybook(type, from, email, event).subscribe((response:any) => {
     console.log(response);
     this.message = response.message;
   })
}

}
