import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalificacionComponent } from './pages/calificacion/calificacion.component';
import { ListaCalificacionComponent } from './pages/lista-calificacion/lista-calificacion.component';
import { ViewCalificacionComponent } from './pages/view-calificacion/view-calificacion.component';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { enviroments } from 'src/enviroments/enviroments';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { CalificacionFirebaseServiceService } from './service/calificacion-firebase-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CalificacionComponent,
    ListaCalificacionComponent,
    ViewCalificacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CalificacionFirebaseServiceService,
    { provide: FIREBASE_OPTIONS, useValue: enviroments.firebaseConfig },
    { provide: 'FirestoreInstance', useFactory: () => getFirestore(), deps: [] },
    { provide: 'FirebaseAppInstance', useFactory: () => initializeApp(enviroments.firebaseConfig), deps: [] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
