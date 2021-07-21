import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AuthGuard } from './auth.guard';
import { CoachComponent } from './coach/coach.component';
import { CoachloginComponent } from './coachlogin/coachlogin.component';
import { CoachregistrationComponent } from './coachregistration/coachregistration.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';
import { MemberloginComponent } from './memberlogin/memberlogin.component';
import { MemberregistrationComponent } from './memberregistration/memberregistration.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about/:id', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'login',
    children: [
      { path: 'adminlogin', component: AdminloginComponent },
      { path: 'memberlogin', component: MemberloginComponent },
      { path: 'coachlogin', component: CoachloginComponent }
    ]
  },
  {
    path: 'login',
    children: [
      { path: 'adminlogin', 
      children: [
        {
          path: 'admin',
          component: AdminComponent,
          canActivate: [AuthGuard]
        }
      ] },
      {
        path: 'memberlogin',
        children: [
          {
            path: 'member',
            component: MemberComponent,
            canActivate: [AuthGuard]
          }
        ]


      },
      { path: 'coachlogin',
      children: [
        {
          path: 'coach',
          component: CoachComponent,
          canActivate: [AuthGuard]
        }
      ]
    }
    ]
  },


  {
    path: 'login',
    children: [
      { path: 'adminlogin', component: AdminloginComponent },
      {
        path: 'memberlogin',
        children: [
          {
            path: 'memberregistration', component: MemberregistrationComponent

          }
        ]


      },
      {
        path: 'coachlogin',
        children: [
          {
            path: 'coachregistration', component: CoachregistrationComponent

          }
        ]

      }
    ]
  },







  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/:id', component: ServicesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
