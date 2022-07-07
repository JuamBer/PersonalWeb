import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { CertificacionService } from 'src/app/services/certificacion.service';
import { Certificate } from 'src/models/certificate.model';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  formacionAcademica$: Observable<any> = this.certificateSrv.getCertificacionesOficiales();
  items: any[] = [];
  entities: Certificate[] = [];

  constructor(
    private certificateSrv: CertificacionService
  ) { }

  ngOnInit(): void {
    this.formacionAcademica$.subscribe(console.log)
  }

}
