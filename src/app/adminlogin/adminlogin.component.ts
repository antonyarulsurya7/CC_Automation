import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  form: any;
  admin: any;
  email: any;
  password: any;
  emailmsg: any;
  pwdmsg: any;
  message: any;
  constructor(private authservice:AuthService,private router: Router ) { }

  ngOnInit(): void {
    this.email = false;
    this.password = false

  }

  admin_login(email: string,password: string){

    if(email =="" || password ==""){


      if(email == ""){
      this.email= true;
      this.emailmsg ="Please Enter the email";
    }
    if(password ==""){
      this.password= true;
      this.pwdmsg ="Please Enter the password";
    }
      }else{
    this.authservice.admin(email,password).subscribe((response: any) => {
      console.log(response);
      
      localStorage.setItem('name', response.name);
      localStorage.setItem('email', response.email);
      localStorage.setItem('token', response.token);
      this.router.navigate(['login/adminlogin/admin']);

    },error => {
      console.log(error)
      this.email= false;
      this.password= false;
      this.message = "invalid email or password"
    });

  }
  }
 

}
