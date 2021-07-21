import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-coachlogin',
  templateUrl: './coachlogin.component.html',
  styleUrls: ['./coachlogin.component.css']
})
export class CoachloginComponent implements OnInit {
  message: any;
  email: any;
  password: any;
  constructor(private authservice:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  coach_login(email: string,password: string){
    if(email == "" || password == ""){
      if(email == ""){
      this.email = "Please Enter the Email"
    }
    if(password == ""){
      this.password = "Please Enter the password"
    }
    }else{
    this.authservice.coach(email,password).subscribe((response: any) => {
      console.log(response);
      localStorage.setItem('id', response.cid);
      localStorage.setItem('name', response.name);
      localStorage.setItem('email', response.email);
      localStorage.setItem('token', response.token);
      this.router.navigate(['login/coachlogin/coach']);

    },error => {
      console.log(error);
      this.email = "";
      this.password = "";
      this.message="Invalid Email or Password";
    });
  }
  }

}
