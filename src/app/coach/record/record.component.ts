import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  members: any;
  record: any;
  records: any;
  id: any;
  constructor(private sharedservice: SharedService) { }

  ngOnInit(): void {

    this.sharedservice.getMember().subscribe((members: any) => {
      console.log(members);
      this.members = members.data;
      console.log(this.members[0].id)
      this.sharedservice.getMembers_record().subscribe((record: any) => {
        console.log(record)
        this.record = record.data;
        console.log(this.record[0].member_id)

        for(let i=0;i<this.members.length;i++ ){
          for(let j=0;j<this.record.length;j++){
       if(this.members[i].id == this.record[j].member_id){
         if(!this.records){
          this.records= [{
            name: this.members[i].name,
            email: this.members[i].email,
            player_type: this.members[i].player_type,
            id: this.record[j].id,
            member_id: this.record[j].member_id,
            age: this.record[j].age,
            matches: this.record[j].matches,
            batsman_hand: this.record[j].batsman_hand,
            total_score: this.record[j].total_score,
            high_score: this.record[j].high_score,
            fifties_hundrads: this.record[j].fifties_and_hundreds,
            bowler_hand: this.record[j].bowler_hands,
            type: this.record[j].type,
            wickets: this.record[j].wickets,
            best: this.record[j].best,
            five_wicket_haul: this.record[j].five_wicket_haul


          
          }]
        }else{
          this.records.push({
          
              name: this.members[i].name,
              email: this.members[i].email,
              player_type: this.members[i].player_type, 
              id: this.record[j].id,
              member_id: this.record[j].member_id,
              age: this.record[j].age,
              matches: this.record[j].matches,
              batsman_hand: this.record[j].batsman_hand,
              total_score: this.record[j].total_score,
              high_score: this.record[j].high_score,
              fifties_hundrads: this.record[j].fifties_and_hundreds,
              bowler_hand: this.record[j].bowler_hands,
              type: this.record[j].type,
              wickets: this.record[j].wickets,
              best: this.record[j].best,
              five_wicket_haul: this.record[j].five_wickets_haul
            
         
          })
        }
       }
      }
      
      }
      console.log(this.records)
      for(let i=0; i<this.records.length; i++){
        if(this.records[i].player_type.toLowerCase() == "all rounder"){
          if(this.records[i].age == "0"){

            this.records[i]= {
              name: this.records[i].name,
              email: this.records[i].email,
              player_type: this.records[i].player_type,
              id: this.records[i].id,
              member_id: this.records[i].member_id,
              age: "--",
              matches: "--",
              batsman_hand: "--",
              total_score: "--",
              high_score: "--",
              fifties_hundrads: "--",
              bowler_hand: "--",
              type: "--",
              wickets: "--",
              best: "--",
              five_wicket_haul: "--"
    
            
            }
  

          }

        }else if(this.records[i].player_type.toLowerCase() == "batsman"){

          if(this.records[i].age == "0"){
            this.records[i]= {
              name: this.records[i].name,
              email: this.records[i].email,
              player_type: this.records[i].player_type,
              id: this.records[i].id,
              member_id: this.records[i].member_id,
              age: "--",
              matches: "--",
              batsman_hand: "--",
              total_score: "--",
              high_score: "--",
              fifties_hundrads: "--",
              bowler_hand: "--",
              type: "--",
              wickets: "--",
              best: "--",
              five_wicket_haul: "--"
    
            
            }

          }else{

          this.records[i] = {
          
            name: this.records[i].name,
            email: this.records[i].email,
            player_type: this.records[i].player_type, 
            id: this.records[i].id,
            member_id: this.records[i].member_id,
            age: this.records[i].age,
            matches: this.records[i].matches,
            batsman_hand: this.records[i].batsman_hand,
            total_score: this.records[i].total_score,
            high_score: this.records[i].high_score,
            fifties_hundrads: this.records[i].fifties_hundrads,
            bowler_hand: "--",
            type: "--",
            wickets: "--",
            best: "--",
            five_wicket_haul: "--"
          
       
        }
      }

        }else if(this.records[i].player_type.toLowerCase() == "bowler"){


          if(this.records[i].age == "0"){
            this.records[i]= {
              name: this.records[i].name,
              email: this.records[i].email,
              player_type: this.records[i].player_type,
              id: this.records[i].id,
              member_id: this.records[i].member_id,
              age: "--",
              matches: "--",
              batsman_hand: "--",
              total_score: "--",
              high_score: "--",
              fifties_hundrads: "--",
              bowler_hand: "--",
              type: "--",
              wickets: "--",
              best: "--",
              five_wicket_haul: "--"
    
            
            }

          }else{


          this.records[i] = {
          
            name: this.records[i].name,
            email: this.records[i].email,
            player_type: this.records[i].player_type, 
            id: this.records[i].id,
            member_id: this.records[i].member_id,
            age: this.records[i].age,
            matches: this.records[i].matches,
            batsman_hand: "--",
            total_score: "--",
            high_score: "--",
            fifties_hundrads: "--",
            bowler_hand: this.records[i].bowler_hands,
            type: this.records[i].type,
            wickets: this.records[i].wickets,
            best: this.records[i].best,
            five_wicket_haul: this.records.five_wickets_haul
          
       
        }
      }

        }else{

          if(this.records[i].age == "0"){
            this.records[i]= {
              name: this.records[i].name,
              email: this.records[i].email,
              player_type: this.records[i].player_type,
              id: this.records[i].id,
              member_id: this.records[i].member_id,
              age: "--",
              matches: "--",
              batsman_hand: "--",
              total_score: "--",
              high_score: "--",
              fifties_hundrads: "--",
              bowler_hand: "--",
              type: "--",
              wickets: "--",
              best: "--",
              five_wicket_haul: "--"
    
            
            }

          }else{

          this.records[i] = {
          
            name: this.records[i].name,
            email: this.records[i].email,
            player_type: this.records[i].player_type, 
            id: this.records[i].id,
            member_id: this.records[i].member_id,
            age: this.records[i].age,
            matches: this.records[i].matches,
            batsman_hand: this.records[i].batsman_hand,
            total_score: this.records[i].total_score,
            high_score: this.records[i].high_score,
            fifties_hundrads: this.records[i].fifties_hundrads,
            bowler_hand: "--",
            type: "--",
            wickets: this.records[i].wickets,
            best: "--",
            five_wicket_haul: "--"
          
       
        }
      }

        }
      }

      })
      
    }) 
    
    
  }


editbutton(id: string, player_type: string, age: string){
  this.id = id;
  const index = this.records.findIndex((req: any, index: any) =>{

    return req.id === id;
  })
  
  if(age == "--"){
  if(player_type.toLowerCase() == "all rounder"){
    
    this.records[index] = {
          
      name: this.records[index].name,
      email: this.records[index].email,
      player_type: this.records[index].player_type, 
      id: this.records[index].id,
      member_id: this.records[index].member_id,
      age: "1",
      matches: "1",
      batsman_hand: "Right",
      total_score: "1",
      high_score: "1",
      fifties_hundrads: "1",
      bowler_hand: "Right",
      type: "Fast",
      wickets: "1",
      best: "1",
      five_wicket_haul: "1"
    
 
  }
    
    
  }
  else if(player_type.toLowerCase() == "batsman"){
    

    this.records[index] = {
          
      name: this.records[index].name,
      email: this.records[index].email,
      player_type: this.records[index].player_type,
      id: this.records[index].id,
      member_id: this.records[index].member_id,
      age: "1",
      matches: "1",
      batsman_hand: "Right",
      total_score: "1",
      high_score: "1",
      fifties_hundrads: "1",
      bowler_hand: "--",
      type: "--",
      wickets: "--",
      best: "--",
      five_wicket_haul: "--"
    
  }



  }
  else if(player_type.toLowerCase() == "bowler"){
    
    this.records[index] = {
          
      name: this.records[index].name,
      email: this.records[index].email,
      player_type: this.records[index].player_type,
      id: this.records[index].id,
      member_id: this.records[index].member_id,
      age: "1",
      matches: "1",
      batsman_hand: "--",
      total_score: "--",
      high_score: "--",
      fifties_hundrads: "--",
      bowler_hand: "Right",
      type: "Fast",
      wickets: "1",
      best: "1",
      five_wicket_haul: "1"
    
 
  }

  }else{
    
    this.records[index] = {
          
      name: this.records[index].name,
      email: this.records[index].email,
      player_type: this.records[index].player_type,
      id: this.records[index].id,
      member_id: this.records[index].member_id,
      age: "1",
      matches: "1",
      batsman_hand: "Right",
      total_score: "1",
      high_score: "1",
      fifties_hundrads: "1",
      bowler_hand: "--",
      type: "--",
      wickets: "1",
      best: "--",
      five_wicket_haul: "--"
 
  }

  }
}
console.log(this.records)

}
edited_button(age: string, player_type: string, matches: string, batsman_hand: string, total_score: string, high_score: string, fifties_and_hundreds: string, bowler_hands: string, type: string, wickets: string, best: string, five_wickets_haul: string, id: any){
  this.id = 0;
  const index = this.records.findIndex((req: any, index: any) =>{

    return req.member_id == id;
  
  })
  console.log(index); 
  if(player_type.toLowerCase()=="all rounder"){
    this.sharedservice.update_record( age, matches, batsman_hand, total_score, high_score, fifties_and_hundreds, bowler_hands, type, wickets, best, five_wickets_haul, id ).subscribe((respons: any) => {
      console.log(respons);
    })

    this.records[index] = {
          
      name: this.records[index].name,
      email: this.records[index].email,
      player_type: this.records[index].player_type, 
      id: id,
      member_id: this.records[index].member_id,
      age: age,
      matches: matches,
      batsman_hand: batsman_hand,
      total_score: total_score,
      high_score: high_score,
      fifties_hundrads: fifties_and_hundreds,
      bowler_hand: bowler_hands,
      type: type,
      wickets: wickets,
      best: best,
      five_wicket_haul: five_wickets_haul
    
 
  }

  }
  else if(player_type.toLowerCase()=="batsman"){
    this.sharedservice.update_batsman( age, matches, batsman_hand, total_score, high_score, fifties_and_hundreds, id ).subscribe((response: any) => {
      console.log(response);
    })

    this.records[index] = {
          
      name: this.records[index].name,
      email: this.records[index].email,
      player_type: this.records[index].player_type, 
      id: this.records[index].id,
      member_id: this.records[index].member_id,
      age: age,
      matches: matches,
      batsman_hand: batsman_hand,
      total_score: total_score,
      high_score: high_score,
      fifties_hundrads: fifties_and_hundreds,
      bowler_hand: "--",
      type: "--",
      wickets: "--",
      best: "--",
      five_wicket_haul: "--"
    
 
  }

  }

  else if(player_type.toLowerCase()=="bowler"){

    this.sharedservice.update_bowler( age, matches, bowler_hands, type, wickets, best, five_wickets_haul, id ).subscribe((response: any) => {
      console.log(response);
    })

    this.records[index] = {
          
      name: this.records[index].name,
      email: this.records[index].email,
      player_type: this.records[index].player_type, 
      id: this.records[index].id,
      member_id: this.records[index].member_id,
      age: age,
      matches: matches,
      batsman_hand: "--",
      total_score: "--",
      high_score: "--",
      fifties_hundrads: "--",
      bowler_hand: bowler_hands,
      type: type,
      wickets: wickets,
      best: best,
      five_wicket_haul: five_wickets_haul
    
 
  }

  }
  else {

    this.sharedservice.update_keeper( age, matches, batsman_hand, total_score, high_score, fifties_and_hundreds, wickets, id ).subscribe((response: any) => {
      console.log(response);
    })

    this.records[index] = {
          
      name: this.records[index].name,
      email: this.records[index].email,
      player_type: this.records[index].player_type, 
      id: this.records[index].id,
      member_id: this.records[index].member_id,
      age: age,
      matches: matches,
      batsman_hand: batsman_hand,
      total_score: total_score,
      high_score: high_score,
      fifties_hundrads: fifties_and_hundreds,
      bowler_hand: "--",
      type: "--",
      wickets: wickets,
      best: "--",
      five_wicket_haul: "--"
    
 
  }
    
  }

  console.log(this.records)
}




}
