import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private WebRequestService: WebRequestService) { }


  //Member Manupulation 


//GET
  getMember() {
    return this.WebRequestService.get('member');
  }

  getRequest() {
    return this.WebRequestService.get('member/request');
  }
  getMemberById(id: any){
    return this.WebRequestService.get(`member/${id}`);
  }

  //POST
  memberStatus(accepted: string, id: any , email:any) {

    return this.WebRequestService.post('member/status', { accepted, id ,email})
  }

//PATCH
editmember(id: number,name: string, email: string, dob: string, player_type: string, mobile_number: string, address: string){
  return this.WebRequestService.patch('member', { id, name, email, dob, player_type, mobile_number, address })
}


//delete
DeleteMember(id: any){
  return this.WebRequestService.delete(`member/${id}`);
}



  // Ground Manupulation

//POST
  daybook(type: string, from: string, email: string, event: string){
      return this.WebRequestService.post('ground', { type, from, email, event})
  }

  bulkbook(type: string, from: string, to: string, email: string, event: string){
    return this.WebRequestService.post('ground', { type, from, to, email, event})
}
 //GET
getGroundRequest(){
    return this.WebRequestService.get('ground/request');
}
getBooking(){
  return this.WebRequestService.get('ground');
}
getGroundById(id: any){
  return this.WebRequestService.get(`ground/${id}`);
}

//PATCH
groundStatus(status: string, id: any, email: string) {
   console.log(id);
  return this.WebRequestService.patch('ground/status', { status, id, email })
}

editdaybook(type: string, from: string, email: string, event: string){
  return this.WebRequestService.patch('ground', { type, from, email, event})
}

editbulkbook(type: string, from: string, to: string, email: string, event: string){
return this.WebRequestService.patch('ground', { type, from, to, email, event})
}

//delete
DeleteGround(id: any){
  return this.WebRequestService.delete(`ground/${ id }`);
}


//Coach Manupulation 
//GET
getCoach() {
  return this.WebRequestService.get('coach');
}

getCoachRequest() {
  return this.WebRequestService.get('coach/request');
}

getCoachById(id: any){
  return this.WebRequestService.get(`coach/${id}`);
}



//PATCH
CoachStatus(accepted: string, id: any , email: String) {

  return this.WebRequestService.patch('coach/status', { accepted, id ,email })
}


editCoach(id: number,email: string, name: string, coachtype: string, age: string, mobile_number: string){
  return this.WebRequestService.patch('coach', {id, email, name, coachtype, age, mobile_number })
}



//delete
DeleteCoach(id: any){
   return this.WebRequestService.delete(`coach/${id}`);
}

//Records

getMembers_record() {
  return this.WebRequestService.get('records');
}

get_member_record(id: any){
  return this.WebRequestService.get(`/member/record/${id}`);
}

update_record(age: string, matches: string, batsman_hand: string, total_score: string, high_score: string, fifties_and_hundreds: string, bowler_hands: string, type: string, wickets: string, best: string, five_wickets_haul: string, id: any){
  return this.WebRequestService.patch(`record`,{ age, matches, batsman_hand, total_score, high_score, fifties_and_hundreds, bowler_hands, type, wickets, best, five_wickets_haul, id });
}

update_batsman(age: string, matches: string, batsman_hand: string, total_score: string, high_score: string, fifties_and_hundreds: string, id: any){
  return this.WebRequestService.patch(`batsman_record`,{ age, matches, batsman_hand, total_score, high_score, fifties_and_hundreds, id });
}

update_bowler(age: string, matches: string, bowler_hands: string, type: string, wickets: string, best: string, five_wickets_haul: string, id: any){
  return this.WebRequestService.patch(`bowler_record`,{ age, matches, bowler_hands, type, wickets, best, five_wickets_haul, id });
}

update_keeper(age: string, matches: string, batsman_hand: string, total_score: string, high_score: string, fifties_and_hundreds: string, wickets: string, id: any){
  return this.WebRequestService.patch(`keeper_record`,{ age, matches, batsman_hand, total_score, high_score, fifties_and_hundreds, wickets, id });
}

//Notice

getNotice(){
  return this.WebRequestService.get('notice');
}

getNoticeByName(event: string){
  return this.WebRequestService.get(`eventname/${event}`);
}

create_notice(event: string, link: any) {

  return this.WebRequestService.post('notice', { event, link})
}

update_notice(event: string, link: any, id: any) {

  return this.WebRequestService.patch('notice', { event, link, id})
}

delete_notice( id: any) {

  return this.WebRequestService.delete(`notice/${id}`);
}


//Team

getTeam(){
  return this.WebRequestService.get('team');
}

getTeamByName(tname: any){
  return this.WebRequestService.get(`team/${tname}`);
}

create_team(id: any, tname: string, team: any, name: any) {

  return this.WebRequestService.post('team', { id, tname, team, name })
}

update_team(name: string, team: any, id: any) {

  return this.WebRequestService.patch('team', { name, team, id })
}

delete_team( id: any) {

  return this.WebRequestService.delete(`team/${id}`);
}

}

