import { Component } from '@angular/core';
import { EstadosService } from '../estados.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-buscar-estado',
  templateUrl: './buscar-estado.component.html',
  styleUrls: ['./buscar-estado.component.css']
})
export class BuscarEstadoComponent {
  public estado: any; 
  public id: number = 0;

  constructor(private estadosService: EstadosService) { }
  ngOnInit(): void {
    this.id = 0;
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

}
