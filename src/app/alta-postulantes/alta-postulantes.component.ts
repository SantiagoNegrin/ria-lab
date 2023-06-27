import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alta-postulantes',
  templateUrl: './alta-postulantes.component.html',
  styleUrls: ['./alta-postulantes.component.css']
})
export class AltaPostulantesComponent {
  postulante: any = {};

  constructor(private http: HttpClient) {}

  crearPostulante() {
    const apiUrl = 'http://localhost:5000/api/Postulantes';
    const body = {
      id: 0,
      activo: true,
      fechaHoraEntrevista: '2023-06-27T17:39:45.030Z',
      estudioMeritosRealizado: true,
      entrevistaRealizada: true,
      llamadoId: 0,
      personaId: 0,
      persona: {
        id: 0,
        activo: true,
        tipoDeDocumento: {
          id: 0,
          activo: true,
          nombre: 'string'
        },
        documento: 'string',
        primerNombre: 'string',
        segundoNombre: 'string',
        primerApellido: 'string',
        segundoApellido: 'string'
      }
    };

    this.http.post<any>(apiUrl, body).subscribe(response => {
      console.log('Postulante creado:', response);
      // Puedes redirigir a una página de éxito o realizar otras acciones después de crear el postulante
    });
  }
}