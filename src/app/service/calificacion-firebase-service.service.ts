import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Calificacion } from '../domain/calificacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalificacionFirebaseServiceService {
  private path = '/notas';
  calificacionesRef: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.calificacionesRef = db.collection(this.path);
  }

  observeCalificaciones(): Observable<any[]> {
    return this.calificacionesRef.valueChanges();
  }

  save(calificacion: Calificacion): Promise<void> {
    const uid = this.db.createId();
    calificacion.uid = uid;
    calificacion.materia = calificacion.materia;
    return this.calificacionesRef.doc(uid).set(Object.assign({}, calificacion));
  }

  getCalificacion(uid: string): Observable<any> {
    return this.db.doc(this.path + '/' + uid).valueChanges();
  }

  getAll(){
    return this.calificacionesRef.valueChanges()
  }

  getPersona(uid: string){
    return this.db.doc(this.path+'/'+uid).valueChanges();
  }

  update(calificacion: Calificacion) {
    const uid = calificacion.uid;
    if (uid) {
      // Verifica que la nota tenga un UID antes de intentar actualizar
      return this.calificacionesRef.doc(uid).update(Object.assign({}, calificacion));
    } else {
      // Manejar el caso en el que la nota no tenga un UID válido
      console.error('La nota no tiene un UID válido para actualizar.');
      return Promise.reject('La nota no tiene un UID válido para actualizar.');
    }

  }

  delete(calificacion: Calificacion) {
    const uid = calificacion.uid;
    if (uid) {
      return this.calificacionesRef.doc(uid).delete();
    } else {
      console.error('La nota no tiene un UID válido para eliminar.');
      return Promise.reject('La nota no tiene un UID válido para eliminar.');
    }
  }
}

