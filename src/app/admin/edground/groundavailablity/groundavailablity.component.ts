import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-groundavailablity',
  templateUrl: './groundavailablity.component.html',
  styleUrls: ['./groundavailablity.component.css']
})
export class GroundavailablityComponent implements OnInit {
  authservice: AuthService | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
