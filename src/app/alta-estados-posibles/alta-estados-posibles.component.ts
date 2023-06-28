import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alta-estados-posibles',
  templateUrl: './alta-estados-posibles.component.html',
  styleUrls: ['./alta-estados-posibles.component.css']
})
export class AltaEstadosPosiblesComponent {
  nombre: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) { }

  crearEstadoPosible() {
    const url = 'http://localhost:5000/api/LlamadosEstadosPosibles';

    const body = {
      activo: true,
      nombre: this.nombre
    };

    this.http.post(url, body).subscribe(response => {
      this.successMessage = 'Estado posible creado exitosamente.';
      this.errorMessage = '';
      console.log('Estado posible creado exitosamente.');
      // Aquí puedes agregar lógica adicional, como redireccionar a otra página.
    }, error => {
      this.successMessage = '';
      this.errorMessage = 'Error al crear el estado posible: ' + error.message;
      console.error('Error al crear el estado posible:', error);
      // Aquí puedes manejar el error, mostrar un mensaje de error más específico, etc.
    });
  }
}
