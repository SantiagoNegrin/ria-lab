import { Component } from '@angular/core';
import { EstadosService } from '../estados.service';
import { tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-estado',
  templateUrl: './editar-estado.component.html',
  styleUrls: ['./editar-estado.component.css']
})
export class EditarEstadoComponent {
  public estado: any;
  id: number = 0;

  constructor(private estadosService: EstadosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id === null || id === undefined ){
        alert('Error');
      }else{
        this.id = Number.parseInt(id);
        this.getEstadoById(this.id);
      }
    });
  }

  getEstadoById(id: number): void {
    this.estadosService.getEstadoById(id).pipe(
      tap({
        next: (response) => {
          this.estado = response;
        },
        error: (error) => {
          this.estado = "";
          console.error('Error:', error);
          alert(`No se encontro el estado`);
        }
      })
    ).subscribe();
  }

  updateEstado() {
    this.estadosService.updateEstado(this.id, this.estado).pipe(
      tap({
        next: (response) => {
          alert('Estado actualizado');
        
        },
        error: (error) => {
          console.error('Error:', error);
          alert('Error al actualizar');
        }
      })
    ).subscribe();
  }
}
