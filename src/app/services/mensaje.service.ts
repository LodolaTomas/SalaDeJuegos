import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { Mensaje } from '../clases/mensaje';

@Injectable({
  providedIn: 'root',
})
export class MensajeService {
  rutaDeLaColeccion = '/mensajes';
  referenciaAlaColeccion: AngularFireList<Mensaje>;

  constructor(private bd: AngularFireDatabase) {
    this.referenciaAlaColeccion = bd.list(this.rutaDeLaColeccion);
  }
  Crear(mensaje: Mensaje): any {
    let id=this.bd.createPushId();
    mensaje.id=id;
    return this.referenciaAlaColeccion.push(mensaje);
  }

  ObtenerTodos():AngularFireList<Mensaje> {
    return this.referenciaAlaColeccion;
  }
}
