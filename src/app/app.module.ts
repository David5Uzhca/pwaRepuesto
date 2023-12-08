import { NgModule, isDevMode } from '@angular/core';
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
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

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
    FormsModule,
    AngularFirestoreModule.enablePersistence(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    })

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
