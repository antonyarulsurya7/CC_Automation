import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-memberlogin',
  templateUrl: './memberlogin.component.html',
  styleUrls: ['./memberlogin.component.css']
})
export class MemberloginComponent implements OnInit {
  email: any;
  password: any;
  message: any;
  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
 
  name: any;


  member_login(email: string,password: string){
    if(email == "" || password == ""){
      if(email == ""){
      this.email = "Please Enter the Email"
    }
    if(password == ""){
      this.password = "Please Enter the password"
    }
    }else{
    this.authservice.member(email,password).subscribe((response: any) => {
      console.log(response);
      this.name = response.name;
      localStorage.setItem('name', response.name);
      localStorage.setItem('id', response.id);
      localStorage.setItem('email', response.email);
      localStorage.setItem('token', response.token);
      console.log(localStorage.getItem("email"));
      this.router.navigate(['login/memberlogin/member']);

    }, 
    error =>{
      console.log(error)
      this.email= "";
      this.password= "";
      this.message = "invalid email or password"
    }
    );
  }
  }
 

}

