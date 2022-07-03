import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { Proyecto } from 'src/models/proyecto.model';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {

  proyectos: Proyecto[] = [];

  constructor(
    private proyectosService: ProyectosService
  ) { }

  ngOnInit(): void {
    this.proyectosService.getAll().subscribe(proyectos => {
      console.log(proyectos );

      this.proyectos = proyectos;
    })
  }



}
