import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Calificacion } from 'src/app/domain/calificacion';
import { CalificacionFirebaseServiceService } from 'src/app/service/calificacion-firebase-service.service';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.scss']
})
export class CalificacionComponent {
  id: string = "0103";
  materia: string = "Titulo de nota";
  nota: string = "Descripcion de nota";
  fecha: string = "Fecha de nota";
  
  calificacion: Calificacion = new Calificacion();

  constructor(private router: Router, private calificacionFirebaseService: CalificacionFirebaseServiceService){
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      console.log(params);
      this.calificacion = params['contacto']; 
    }
  }

  savePersona(){
    this.calificacionFirebaseService.save(this.calificacion);
    this.calificacion = new Calificacion();
  }
}
