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
      name: "Resumen",
      page: "home"
    },
    {
      name: "Proyectos",
      page: "proyects"
    },
    {
      name: "Hardware",
      page: "hardware"
    },
    {
      name: "Certificados",
      page: "certificates"
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

  openNav() {
    const nav = document.getElementById("myNav");
    if (nav){
      nav.style.width = "100%";
    }
  }

  closeNav() {
    const nav = document.getElementById("myNav");
    if (nav) {
      nav.style.width = "0%";
    }
  }

}
