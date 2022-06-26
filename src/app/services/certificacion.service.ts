import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, reduce } from 'rxjs';
import { Certificate } from 'src/models/certificate.model';

@Injectable({
  providedIn: 'root'
})
export class CertificacionService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getCertificacionesOficiales() {
    return this.firestore.collection('certificados', ref => ref.where('type', '==', 'formacion')).get();
  }

  getCertificacionesIndividuales() {
    return this.firestore.collection('certificados', ref => ref.where('type', '==', 'individual')).valueChanges({ idField: 'id' });
  }

  getCertificacionesRuta() {
    return this.firestore.collection('certificados', ref => ref.where('type', '==', 'rutas')).valueChanges({ idField: 'id' });
  }

}
