import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from 'src/app/shared.service';

export interface CoachElement {
  name: string;
  email: string; 
  age: number;
  mobile_number: string;
  coachtype: number;
}


@Component({
  selector: 'app-coachprofile',
  templateUrl: './coachprofile.component.html',
  styleUrls: ['./coachprofile.component.css']
})
export class CoachprofileComponent implements OnInit {
  coaches: any;
  dataSource: any;

  constructor(private sharedservice: SharedService) { }

  ngOnInit(): void {
    this.sharedservice.getCoach().subscribe((coaches: any) => {
      console.log(coaches);
      
  this.coaches = coaches.data;
   let ELEMENT_DATA: CoachElement[] = this.coaches;
   let dataSource = new MatTableDataSource(ELEMENT_DATA);
   this.dataSource = dataSource;
      
    })  

  }


  displayedColumns: string[] = ['name', 'email', 'coachtype', 'age', 'mobile_number'];
  
 

  
  @ViewChild(MatSort, {static: false}) 
    
    set sort(sort: MatSort) {
      this.dataSource.sort = sort;
      console.log(this.dataSource);
   }



  applyFilter(filtervalue: string){
    
    this.dataSource.filter = filtervalue.trim().toLowerCase();
  }

}
