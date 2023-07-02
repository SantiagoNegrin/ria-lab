import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alta-estados-posibles',
  templateUrl: './alta-estados-posibles.component.html',
  styleUrls: ['./alta-estados-posibles.component.css']
})
export class AltaEstadosPosiblesComponent {
  nombre: string = '';
  activo: boolean = true;
  errorMessage: string = '';

  constructor(private http: HttpClient) { }

  crearEstadoPosible() {
    const url = 'http://localhost:5000/api/LlamadosEstadosPosibles';

    const body = {
      activo: this.activo,
      nombre: this.nombre
    };

    this.http.post(url, body).subscribe(response => {
      this.errorMessage = '';
      console.log('Estado posible creado exitosamente.');
      location.reload();
    }, error => {
      this.errorMessage = 'Error al crear estado posible';
      console.error('Error al crear el estado posible:', error);
    });
  }
}
