import { Component, OnInit } from '@angular/core';
import { FullDayComponent } from '../groundbooking/full-day/full-day.component';
import { HalfDayComponent } from '../groundbooking/half-day/half-day.component';
import { PracticeComponent } from '../groundbooking/practice/practice.component';
import { TournementComponent } from '../groundbooking/tournement/tournement.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  halfday: any;
  fullday: any;
  tournement: any;
  practice: any;

  constructor() { }

  ngOnInit(): void {
    this.halfday = true;
 
  }


halfdayComponent = HalfDayComponent;
fulldayComonent = FullDayComponent;
tournementComponent = TournementComponent;
practiceComponent = PracticeComponent;




assignComponent(component: string) {
  if (component === "fullday"){ 
  this.fullday = true;
  this.halfday = false;
  this.tournement = false;
  this.practice = false;
  }
  else if (component === "halfday"){ 
    this.fullday = false;
    this.halfday = true;
    this.tournement = false;
    this.practice = false;
    }
  else if (component === "tournement"){ 
    this.fullday = false;
    this.halfday = false;
    this.tournement = true;
    this.practice = false;
    }
  else if (component === "practice"){ 
    this.fullday = false;
    this.halfday = false;
    this.tournement = false;
    this.practice = true;
    }
    else {
      this.fullday = false;
      this.halfday = true;
      this.tournement = false;
      this.practice = false;

    }
}


}
