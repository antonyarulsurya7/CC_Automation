import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
notices: any;
  constructor(private sharedservice: SharedService) { }

  ngOnInit(): void {
    this.sharedservice.getNotice().subscribe((response: any) => {
      console.log(response);
      this.notices = response.data;
    })

  }

}
