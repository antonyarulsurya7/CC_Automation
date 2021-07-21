import { Component, OnInit ,ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from 'src/app/shared.service';

export interface MemberElement {
  name: string;
  email: string; 
  dob: Date;
  mobile_number: string;
  player_type: number;
  address: string;
}


@Component({
  selector: 'app-memberprofile',
  templateUrl: './memberprofile.component.html',
  styleUrls: ['./memberprofile.component.css']
})
export class MemberprofileComponent implements OnInit {
  members: any;
  dataSource: any;
  
  constructor(private sharedservice: SharedService){}

  ngOnInit(): void {
    this.sharedservice.getMember().subscribe((members: any) => {
      console.log(members);
      
  this.members = members.data;
   let ELEMENT_DATA: MemberElement[] = this.members;
   let dataSource = new MatTableDataSource(ELEMENT_DATA);
   this.dataSource = dataSource;
      
    })    
  }
  

  displayedColumns: string[] = ['name', 'email', 'dob','player_type', 'mobile_number', 'address'];
  
  
  @ViewChild(MatSort, {static: false}) 
    
    set sort(sort: MatSort) {
      this.dataSource.sort = sort;
      console.log(this.dataSource);
   }


  applyFilter(filtervalue: string){
    
    this.dataSource.filter = filtervalue.trim().toLowerCase();
  }

}
