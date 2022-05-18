import { Component, OnInit } from '@angular/core';
import { Certificate } from 'src/models/certificate.model';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  entities: Certificate[] = [
    {
      name: "Angular Router",
      url: "https://raw.githubusercontent.com/JuamBer/Platzi-CursoAngularRouter/master/img-licencia/diploma-angular-modular.jpg"
    },
    {
      name: "Angular Router",
      url: "https://raw.githubusercontent.com/JuamBer/Platzi-CursoAngularRouter/master/img-licencia/diploma-angular-modular.jpg"
    },
    {
      name: "Angular Router",
      url: "https://raw.githubusercontent.com/JuamBer/Platzi-CursoAngularRouter/master/img-licencia/diploma-angular-modular.jpg"
    },
    {
      name: "Angular Router",
      url: "https://raw.githubusercontent.com/JuamBer/Platzi-CursoAngularRouter/master/img-licencia/diploma-angular-modular.jpg"
    },
    {
      name: "Angular Router",
      url: "https://raw.githubusercontent.com/JuamBer/Platzi-CursoAngularRouter/master/img-licencia/diploma-angular-modular.jpg"
    },
    {
      name: "Angular Router",
      url: "https://raw.githubusercontent.com/JuamBer/Platzi-CursoAngularRouter/master/img-licencia/diploma-angular-modular.jpg"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
