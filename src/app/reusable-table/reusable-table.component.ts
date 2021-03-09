import { UserService } from './../user.service';
import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.css']
})
export class ReusableTableComponent implements OnInit {

  TableRecords:any=[];
  constructor( private userservice: UserService) { }

  ngOnInit() {
    this.userservice.getUser().subscribe(data=>{
      console.log(data);
      this.TableRecords = data;
    });
  }

}