import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private WebRequestService: WebRequestService, private router: Router) { }

  admin(email: string, password: string,) {

    return this.WebRequestService.post('admin/adminlogin', { email, password })
  }


  member_register(name: string, email: string, password: string, dob: string, player_type: string, mobile_number: string, address: string) {


    return this.WebRequestService.post('member', { name, email, password, dob, player_type, mobile_number, address });
  }

  member(email: string, password: string,) {

    return this.WebRequestService.post('member/memberlogin', { email, password })
  }



  coach_register(email: string, name: string, password: string, coachtype: string, age: string, mobile_number: string) {

    return this.WebRequestService.post('coach', { email, name, password, coachtype, age, mobile_number });
  }

  coach(email: string, password: string,) {

    return this.WebRequestService.post('coach/coachlogin', { email, password })
  }



  loggedIn() {

    return localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }


}
