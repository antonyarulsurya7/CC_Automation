import { Component, OnInit } from '@angular/core';
import { GroundavailablityComponent } from './groundavailablity/groundavailablity.component';
import { GroundbookedComponent } from './groundbooked/groundbooked.component';
import { GroundrequestComponent } from './groundrequest/groundrequest.component';

@Component({
  selector: 'app-edground',
  templateUrl: './edground.component.html',
  styleUrls: ['./edground.component.css']
})
export class EdgroundComponent implements OnInit {
  booked: any;
  request: any;
  availablity: any;



  constructor() { }

  ngOnInit(): void {

    this.request = true;
  }



  groundbookComponent = GroundbookedComponent;
  groundrequestComponent = GroundrequestComponent;
  groundavailablityComponent = GroundavailablityComponent;

  assignComp(component: string) {
    if (component === "booked"){
     this.booked = true;
     this.request = false;
     this.availablity = false;
    }
    else if (component === "request"){
      this.booked = false;
      this.request = true;
      this.availablity = false;
 }
    else if (component === "availablity") {
      this.booked = false;
     this.request = false;
     this.availablity = true;
    }
    else{
      this.booked = true;
      this.request = false;
      this.availablity = false;

    }
}

}
