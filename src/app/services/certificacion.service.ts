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

  // getCertificacionesOficiales(): Observable<Certificate[]> {
  //   return this.firestore.collection('certificates', ref => ref.where('type', '==', 'academico')).valueChanges({idField: 'id'});
  // }

  // getCertificacionesIndividuales() {
  //   return this.firestore.collection('certificates', ref => ref.where('type', '==', 'individual')).valueChanges({ idField: 'id' });
  // }

  // getCertificacionesRuta(id: string) {
  //   return this.firestore.collection('certificates', ref => ref.where('type', '==', 'ruta').where('id_ruta', '==', id)).valueChanges({ idField: 'id' });
  // }

}
