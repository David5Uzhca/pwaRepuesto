import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Calificacion } from 'src/app/domain/calificacion';
import { Subscription } from 'rxjs';
import { CalificacionFirebaseServiceService } from 'src/app/service/calificacion-firebase-service.service';

@Component({
  selector: 'app-lista-calificacion',
  templateUrl: './lista-calificacion.component.html',
  styleUrls: ['./lista-calificacion.component.scss']
})
export class ListaCalificacionComponent {  calificaciones:Calificacion[] = [];
  listaCalificaciones :any;

  constructor(private router:Router, private calificacionFirebaseService: CalificacionFirebaseServiceService){
    this.listaCalificaciones = this.calificacionFirebaseService.getAll();
  }

  goEditar(contacto: any){
      console.log(contacto);
      this.router.navigate(['pages/calificacion']);
  
      let params: NavigationExtras = {
        queryParams : {
          contacto: contacto
      }
      }
  }
}
