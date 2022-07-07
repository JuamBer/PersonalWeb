import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, reduce } from 'rxjs';
import { Certificate } from 'src/models/certificate.model';
import { Hardware } from 'src/models/hardware.model.ts';
import { Proyecto } from 'src/models/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  collectionName:string = 'montajes';

  constructor(
    private firestore: AngularFirestore
  ) { }

  getAll(): Observable<Hardware[]> {
    return this.firestore.collection<any>(this.collectionName).valueChanges({ idField: 'id' });
  }

}
