import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-coachregistration',
  templateUrl: './coachregistration.component.html',
  styleUrls: ['./coachregistration.component.css']
})
export class CoachregistrationComponent implements OnInit {

  message: any;
  constructor(private authservice: AuthService, private router: Router ) { }

  ngOnInit(): void {
  }
  coach_registration(email: string,name: string,password: string, coachtype: string, age: string, mobile_number: string){
    this.authservice.coach_register(email, name, password, coachtype, age, mobile_number).subscribe((response: any) => {
     
      console.log(response);
      
     if(response.success == 0){
      this.message = response.message;
     }else{
      this.router.navigate(['/login/coachlogin']);
     }
    })

  }

}
