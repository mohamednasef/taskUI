import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  status: boolean = false;
clickEvent(){
    this.status = !this.status;       
}
  ngOnInit(): void {
  }

}
