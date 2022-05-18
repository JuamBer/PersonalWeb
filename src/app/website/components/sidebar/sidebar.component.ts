import { Component, OnInit } from '@angular/core';
import { Page } from 'src/models/page.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  pages: Page[] = [
    {
      name: "home"
    },
    {
      name: "contact"
    },
    {
      name: "certificates"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
