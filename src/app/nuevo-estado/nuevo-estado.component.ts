import { Component } from '@angular/core';
import { EstadosService } from '../estados.service';
import { tap } from 'rxjs';

@Component({
  selector: 'nuevo-estado',
  templateUrl: './nuevo-estado.component.html',
  styleUrls: ['./nuevo-estado.component.css']
})
export class NuevoEstadoComponent {
  public nombre: string = "";
  public activo: string = "true";
  id: number = 0;

  constructor(private estadosService: EstadosService) { }


  crearEstado() {
    const estado = {"id": this.id,
                    "activo": this.activo,
                    "nombre": this.nombre
      }
    console.log(estado);
    this.estadosService.crearEstado(estado).pipe(
      tap({
        next: (response) => {
          console.log('Estado creado:', response);
          alert('Estado creado');
          //this.getEstados();
        },
        error: (error) => {
          console.error('Error:', error);
        }
      })
    ).subscribe();
  }
}
