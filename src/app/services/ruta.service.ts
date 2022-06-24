import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { BehaviorSubject, firstValueFrom, forkJoin, map, mergeMap, Observable, pluck, switchMap, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RutaService {

  itemsRefs: any[] = [];
  private items: any[] = [];
  itemsSubject = new BehaviorSubject<any[]>([]);

  constructor(
    private storage: AngularFireStorage
  ) { }

  listAllItemsObservable(listRef: string) {
    firstValueFrom(this.storage.ref(listRef).listAll())
      .then((res: any) => {
        res.prefixes.forEach((folderRef: any) => {
          this.listAllItemsObservable(folderRef.fullPath);
        });


        let curso: any = {}
        res.items.forEach(async (itemRef: any) => {
          console.log("res.items: ",res.items)



          const extension = itemRef.name.split(".").pop();
          const url = await itemRef.getDownloadURL();
          const name = itemRef.name.split(".").shift();

          curso = {
            ...curso,
            [extension]: {
              name: name,
              url: url,
              type: extension
            }
          }
          this.items.push(curso);
          this.itemsSubject.next(this.items);

        });
        this.itemsSubject.next(this.items)

      }).catch((error) => {
        console.error(error)
      });
  }

  organizeItems(ruta: string[], i: number, items: any[], result: any[]): any[] {
    this.itemsRefs.forEach((itemRef: any) => {
      const folders = itemRef.fullPath.split("/");

    });
    const aux: any = {
      name: ruta[i],
      items: []
    }
    console.log(result);

    if (!result.find(item => item.name === aux.name)) {
      result.push(aux);
      this.organizeItems(ruta, i + 1, items, result);
    }

    return result;
  }



}
