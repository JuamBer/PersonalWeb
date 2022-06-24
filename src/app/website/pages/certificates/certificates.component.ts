import { Component, OnInit } from '@angular/core';
import { RutaService } from 'src/app/services/ruta.service';
import { Certificate } from 'src/models/certificate.model';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  formacionAcademica: Certificate[] = [

  ];
  items: any[] = [];
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

  constructor(
    private rutaService: RutaService
  ) { }

  ngOnInit(): void {
    this.rutaService.listAllItemsObservable("certificados/rutas-de-aprendizaje/");
    this.rutaService.itemsSubject.subscribe((items: any[]) => {

      // let aux: any[] = [];
      // items.forEach(item=> {
      //   if(!this.items.find(i => i.name === item.name)){
      //     item.getDownloadURL().then((url: string) => {
      //       aux.push({
      //         name: item.name,
      //         url: url,
      //         type: item.name.split(".").pop()
      //       })
      //       console.log(aux);

      //     })
      //   }
      // })
      console.log(items);

      this.items = items;
    })
  }

}
