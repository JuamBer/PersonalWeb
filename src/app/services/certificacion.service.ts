import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable, pluck, reduce } from 'rxjs';
import { Certificate } from 'src/models/certificate.model';

@Injectable({
  providedIn: 'root'
})
export class CertificacionService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getCertificacionesOficiales(): Observable<any> {
    return this.firestore.collection('certificados', ref => ref.where('type', '==', 'oficial')).valueChanges({ idField: 'id' }).pipe(map(x => x[0]),pluck('certificados'));
  }

  getCertificacionesIndividuales() {
    return this.firestore.collection('certificados', ref => ref.where('type', '==', 'individual')).valueChanges({ idField: 'id' });
  }

  getCertificacionesRuta() {
    return this.firestore.collection('certificados', ref => ref.where('type', '==', 'rutas')).valueChanges({ idField: 'id' });
  }

}
