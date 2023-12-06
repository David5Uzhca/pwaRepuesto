import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Calificacion } from 'src/app/domain/calificacion';
import { CalificacionFirebaseServiceService } from 'src/app/service/calificacion-firebase-service.service';

@Component({
  selector: 'app-view-calificacion',
  templateUrl: './view-calificacion.component.html',
  styleUrls: ['./view-calificacion.component.scss']
})
export class ViewCalificacionComponent {

  calificacion: Calificacion = new Calificacion();

  constructor(private router: Router, private route: ActivatedRoute, private calificacionesFirebaseService: CalificacionFirebaseServiceService){
    this.route.params.subscribe(params =>{
      console.log(params);
      if(params['id']){
        this.loadCalificacion(params['id']);
      }
    })
  }

  goAcercaDe(){
    console.log("LLamado de emergencia", this.calificacion); 
    this.router.navigate(['pages/calificacion']);
  }

  goListaContactos(){
    this.router.navigate(['pages/lista-calificacion']);
  }

  loadCalificacion(uid: string){
  }

}
