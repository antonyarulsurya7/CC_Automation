import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { MemberloginComponent } from './memberlogin/memberlogin.component';
import { CoachloginComponent } from './coachlogin/coachlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

import { HttpClientModule } from '@angular/common/http';
import { MemberComponent } from './member/member.component'; 
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { MemberregistrationComponent } from './memberregistration/memberregistration.component';
import { CoachregistrationComponent } from './coachregistration/coachregistration.component';
import { CoachComponent } from './coach/coach.component';
import { AdminComponent } from './admin/admin.component';
import { SharedService } from './shared.service';
import { HalfDayComponent } from './groundbooking/half-day/half-day.component';
import { FullDayComponent } from './groundbooking/full-day/full-day.component';
import { TournementComponent } from './groundbooking/tournement/tournement.component';
import { PracticeComponent } from './groundbooking/practice/practice.component';
import { EdmemberComponent } from './admin/edmember/edmember.component';
import { EdcoachComponent } from './admin/edcoach/edcoach.component';
import { EdgroundComponent } from './admin/edground/edground.component';
import { MemberprofileComponent } from './admin/edmember/memberprofile/memberprofile.component';
import { MemberlistComponent } from './admin/edmember/memberlist/memberlist.component';
import { MemberrequestComponent } from './admin/edmember/memberrequest/memberrequest.component';
import { AddmemberComponent } from './admin/edmember/addmember/addmember.component';
import { MembereditremoveComponent } from './admin/edmember/membereditremove/membereditremove.component';
import { GroundbookedComponent } from './admin/edground/groundbooked/groundbooked.component';
import { GroundrequestComponent } from './admin/edground/groundrequest/groundrequest.component';
import { GroundavailablityComponent } from './admin/edground/groundavailablity/groundavailablity.component';
import { CoachprofileComponent } from './admin/edcoach/coachprofile/coachprofile.component';
import { CoachlistComponent } from './admin/edcoach/coachlist/coachlist.component';
import { CoachrequestComponent } from './admin/edcoach/coachrequest/coachrequest.component';
import { AddcoachComponent } from './admin/edcoach/addcoach/addcoach.component';
import { CoacheditandremoveComponent } from './admin/edcoach/coacheditandremove/coacheditandremove.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { EdnoticeComponent } from './admin/ednotice/ednotice.component';
import { ProfileComponent } from './coach/profile/profile.component';
import { RecordComponent } from './coach/record/record.component';
import { TeamComponent } from './coach/team/team.component';


const material = [
  MatDatepickerModule,
  MatTooltipModule,
  MatTableModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule, 
  MatIconModule,
  MatSelectModule
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    MemberloginComponent,
    CoachloginComponent,
    AdminloginComponent,
    MemberComponent,
    MemberregistrationComponent,
    CoachregistrationComponent,
    CoachComponent,
    AdminComponent,
    HalfDayComponent,
    FullDayComponent,
    TournementComponent,
    PracticeComponent,
    EdmemberComponent,
    EdcoachComponent,
    EdgroundComponent,
    MemberprofileComponent,
    MemberlistComponent,
    MemberrequestComponent,
    AddmemberComponent,
    MembereditremoveComponent,
    GroundbookedComponent,
    GroundrequestComponent,
    GroundavailablityComponent,
    CoachprofileComponent,
    CoachlistComponent,
    CoachrequestComponent,
    AddcoachComponent,
    CoacheditandremoveComponent,
    EdnoticeComponent,
    ProfileComponent,
    RecordComponent,
    TeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    material
  ],
  providers: [AuthService, AuthGuard, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
