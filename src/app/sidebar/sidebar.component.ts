import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: string[] = ['Dashboard', 'Site Details', 'Migrations', 'Backups', 'Collaborators', 'Support Tickets', 'Open New Ticket'];
  constructor() { }

  ngOnInit(): void {
  }

}
