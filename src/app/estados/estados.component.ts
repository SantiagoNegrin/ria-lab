import { Component, OnInit } from '@angular/core';
import { EstadosService } from '../estados.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})

export class EstadosComponent implements OnInit {
  estados: any[] = [];
  public nombre: string = "";
  public activo: string = "";
  id: number = 0;

  constructor(private estadosService: EstadosService, private router: Router) { }

  ngOnInit() {
    this.getEstados();
  }

  getEstados() {
    this.estadosService.getEstados().pipe(
      tap({
        next: (response) => {
          this.estados = response.list;
        },
        error: (error) => {
          console.error('Error:', error);
        }
      })
    ).subscribe();
  }

  redirectUpdate(id: number){
    this.router.navigate(['/editarEstado', id]);
  }
  redirectNuevo(){
    this.router.navigate(['/nuevoEstado']);
  }

  eliminarEstado(id: number) {
    this.estadosService.eliminarEstado(id).pipe(
      tap({
        next: (response) => {
          console.log('Estado eliminado:', response);          
          this.getEstados();
        },
        error: (error) => {
          console.error('Error:', error);
        }
      })
    ).subscribe();
  }
}

