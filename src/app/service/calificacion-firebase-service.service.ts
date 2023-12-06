import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Calificacion } from '../domain/calificacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalificacionFirebaseServiceService {
  private path = '/calificaciones';
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

}

