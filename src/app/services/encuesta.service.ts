import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  rutaDeLaColeccion = "/encuesta";
  referenciaAlaColeccion: AngularFirestoreCollection<any>;  


  constructor(private bd: AngularFirestore) {
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
  }

  public AgregarRespuesta(respuesta: any): any {
    return this.referenciaAlaColeccion.add({ ...respuesta });
  }
}
