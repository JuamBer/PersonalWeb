import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, reduce } from 'rxjs';
import { Certificate } from 'src/models/certificate.model';
import { Proyecto } from 'src/models/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  collectionName:string = 'proyectos';

  constructor(
    private firestore: AngularFirestore
  ) { }

  getAll(): Observable<Proyecto[]> {
    return this.firestore.collection<any>(this.collectionName).valueChanges({ idField: 'id' });
  }

}
