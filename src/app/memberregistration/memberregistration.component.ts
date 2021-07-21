import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-memberregistration',
  templateUrl: './memberregistration.component.html',
  styleUrls: ['./memberregistration.component.css']
})
export class MemberregistrationComponent implements OnInit {

  message: any;

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  member_registration(name: string,email: string,password: string, dob: string, player_type: string, mobile_number: string, address: string){
    this.authservice.member_register(name, email, password, dob, player_type, mobile_number, address).subscribe((response: any) => {
     
      console.log(response);
      
     if(response.success == 0){
      this.message = response.message;
     }else{
      this.router.navigate(['/login/memberlogin']);
     }
    })

  }

}
