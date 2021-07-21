import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor( private authservice: AuthService, private router: Router ) { }
 
 
  canActivate(): boolean{
    if(this.authservice.loggedIn()){
      console.log('true');
      return true
    }else{
      this.router.navigate(['login']);
      console.log('false')
      return false
    }
  }
  
  
  
}
