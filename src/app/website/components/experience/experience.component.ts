import { Component, OnInit } from '@angular/core';
import { Experience, TypeExperience } from 'src/models/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [
    {
      type: TypeExperience.EDUCATION,
      organization: "Jesus María Fuensanta",
      items: [
        {
          startDate: new Date(2014, 1, 1),
          endDate: new Date(2020, 1, 1)
        }
      ]
    },
    {
      type: TypeExperience.EDUCATION,
      organization: "IES Rascanya",
      items: [
        {
          startDate: new Date(2018, 1, 1),
          endDate: new Date(2020, 1, 1)
        }
      ]
    },
    {
      type: TypeExperience.EDUCATION,
      organization: "IES Abastos",
      items: [
        {
          startDate: new Date(2020, 1, 1),
          endDate: new Date(2022, 1, 1)
        }
      ]
    },
    {
      type: TypeExperience.JOB,
      organization: "ODEC",
      items: [
        {
          position: "Prácticas FCT",
          startDate: new Date(2022, 3, 1),
          endDate: new Date(2022, 5, 1),
        },
        {
          position: "Desarollador De Aplicaciones Web",
          startDate: new Date(2022, 5, 1),
          endDate: null
        }
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
