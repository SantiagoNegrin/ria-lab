import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alta-postulante',
  templateUrl: './alta-postulante.component.html',
  styleUrls: ['./alta-postulante.component.css']
})
export class AltaPostulanteComponent implements OnInit {
  personas: any[] = [];
  llamados: any[] = [];
  personaId: number = 0;
  llamadoId: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPersonas();
    this.fetchLlamados();
  }

  fetchPersonas() {
    const data = {
      limit: 0,
      offset: 0,
      id: 0,
      filters: {
        activo: true,
        nombre: 'string' // Reemplaza 'string' con el valor de filtro deseado
      },
      orders: ['string']
    };

    this.http.post('http://localhost:5000/api/Personas/Paged', data)
      .subscribe((response: any) => {
        this.personas = response.list; // Asignar la lista de personas a la variable del componente
      });
  }

  fetchLlamados() {
    const data = {
      limit: 0,
      offset: 0,
      id: 0,
      filters: {
        activo: true,
        nombre: 'string', // Reemplaza 'string' con el valor de filtro deseado
        identificador: 'string', // Reemplaza 'string' con el valor de filtro deseado
        personaTribunalId: 0,
        estadoId: 0
      },
      orders: ['string']
    };

    this.http.post('http://localhost:5000/api/Llamados/Paged', data)
      .subscribe((response: any) => {
        this.llamados = response.list; // Asignar la lista de llamados a la variable del componente
      });
  }

  altaPostulante() {
    const data = {
      id: 0,
      activo: true,
      fechaHoraEntrevista: new Date().toISOString(), // Reemplaza con la fecha y hora deseada
      estudioMeritosRealizado: true,
      entrevistaRealizada: true,
      llamadoId: this.llamadoId,
      personaId: this.personaId,
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

    this.http.post('http://localhost:5000/api/Postulantes', data)
      .subscribe((response: any) => {
        // Procesar la respuesta del alta del postulante
      });
  }
}
