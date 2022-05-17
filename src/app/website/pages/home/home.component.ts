import { Component, OnInit } from '@angular/core';
import { Ability } from 'src/models/ability.model';
import { Tool } from 'src/models/tool.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tools: Tool[] = [
    {
      name: 'Visual Studio Code',
      ability: 75
    },
    {
      name: 'Google Chrome',
      ability: 80
    },
    {
      name: 'Postman',
      ability: 60
    },
    {
      name: 'Spring Tool Suite 4',
      ability: 70
    },
    {
      name: 'Source Tree',
      ability: 90
    },
    {
      name: 'Windows Terminal',
      ability: 85
    }
  ];

  softwareAbilities: Ability[] = [
    {
      name: 'Java',
      ability: 90
    },
    {
      name: 'Hardware',
      ability: 85
    },
    {
      name: 'MySQL',
      ability: 90
    },
    {
      name: 'MongoDB',
      ability: 70
    },
    {
      name: 'Git & GitHub',
      ability: 70
    },
    {
      name: 'Angular',
      ability: 70
    },
    {
      name: 'Ionic',
      ability: 65
    },
    {
      name: 'Flutter',
      ability: 45
    },
    {
      name: 'Regex',
      ability: 90
    },
  ];

  lenguagesAbilities: Ability[] = [
    {
      name: 'Español',
      ability: 95
    },
    {
      name: 'Inglés',
      ability: 55
    },
    {
      name: 'Catalán',
      ability: 55
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
