import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alta-tipo-integrante',
  templateUrl: './alta-tipo-integrante.component.html',
  styleUrls: ['./alta-tipo-integrante.component.css']
})
export class AltaTipoIntegranteComponent {
  nombre: string = '';
  orden: number = 0;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) { }

  altaTipoIntegrante() {
    const url = 'http://localhost:5000/api/TiposDeIntegrantes';
    const body = {
      id: 0,
      activo: true,
      nombre: this.nombre,
      orden: this.orden
    };

    this.http.post(url, body).subscribe(
      (response) => {
        console.log('Alta exitosa:', response);
        this.successMessage = 'Alta exitosa'; // Mensaje de éxito
        this.errorMessage = ''; // Reinicia el mensaje de error
        // Realiza acciones adicionales después de un alta exitosa
      },
      (error) => {
        console.error('Error en el alta:', error);
        this.successMessage = ''; // Reinicia el mensaje de éxito
        this.errorMessage = 'Error en el alta'; // Mensaje de error
        // Maneja el error del alta
      }
    );
  }
}
