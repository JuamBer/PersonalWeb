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
      name: "Contacto",
      page: "contact"
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

}
