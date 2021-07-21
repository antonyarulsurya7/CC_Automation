import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  message: any;
  Email: any;
  constructor(private sharedservice: SharedService) { }

  ngOnInit(): void {
    this.Email = localStorage.getItem('email');
  }

  practice(type: string , from: string,to: string, email: string, event: string){
    this.sharedservice.bulkbook(type, from, to, email, event).subscribe((response:any) => {
      console.log(response);
      this.message = response.message;
    
    })
 }


}
