import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-full-day',
  templateUrl: './full-day.component.html',
  styleUrls: ['./full-day.component.css']
})
export class FullDayComponent implements OnInit {
 message: any;
 Email: any;
  constructor(private sharedservice: SharedService) { }

  ngOnInit(): void {
    this.Email = localStorage.getItem('email');
    this.sharedservice.getBooking().subscribe((response: any) => {
      console.log(response)
    })
  }


  fullday(type: string , from: string, email: string, event: string){
    this.sharedservice.daybook(type, from, email, event).subscribe((response:any) => {
      console.log(response);
      this.message = response.message;
    });
  }

}
