import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CertificacionService } from 'src/app/services/certificacion.service';
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
  entities: Certificate[] = [];

  constructor(
    private certificateSrv: CertificacionService
  ) { }

  ngOnInit(): void {
    this.certificateSrv.getCertificacionesRuta().subscribe(res =>{
      console.log(res);

    })

    this.certificateSrv.getCertificacionesOficiales().subscribe(res => {
      console.log(res);

    })
  }

}
