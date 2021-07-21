import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-groundbooked',
  templateUrl: './groundbooked.component.html',
  styleUrls: ['./groundbooked.component.css']
})
export class GroundbookedComponent implements OnInit {
  responses: any;
  constructor(private sharedservice: SharedService ) { }

  ngOnInit(): void {
  
    this.sharedservice.getBooking().subscribe((response: any) => {
      console.log(response);
      this.responses = response.data;

    })

  }

}
