import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alta-miembros-tribunales-componen',
  templateUrl: './alta-miembros-tribunales-componen.component.html',
  styleUrls: ['./alta-miembros-tribunales-componen.component.css']
})
export class AltaMiembrosTribunalesComponenComponent {
  personas: any[] = [];
  tiposIntegrantes: any[] = [];
  tipoIntegranteSeleccionado: any;
  personaSeleccionada: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerPersonas();
    this.obtenerTiposIntegrantes();
  }

  obtenerPersonas() {
    const apiUrl = 'http://localhost:5000/api/Personas/Paged';
  
    const body = {
      limit: 1000,
      offset: 0,
      id: 0,
      filters: {
        activo: true,
        nombre: ''
      },
      orders: ['string']
    };
  
    this.http.post<any>(apiUrl, body).subscribe(response => {
      this.personas = response.list;
      console.log('Personas:', this.personas);
    }, error => {
      console.error('Error al obtener las personas:', error);
    });
  }
  

  obtenerTiposIntegrantes() {
    const apiUrl = 'http://localhost:5000/api/TiposDeIntegrantes/Paged';
  
    const body = {
      limit: 1000,
      offset: 0,
      id: 0,
      filters: {
        activo: true,
        nombre: ''
      },
      orders: ['string']
    };
  
    this.http.post<any>(apiUrl, body).subscribe(response => {
      this.tiposIntegrantes = response.list;
      console.log('Tipos de integrantes:', this.tiposIntegrantes);
    }, error => {
      console.error('Error al obtener los tipos de integrantes:', error);
    });
  }
  enviarFormulario() {
    if (this.tipoIntegranteSeleccionado && this.personaSeleccionada) {
      const data = {
        id: 0,
        activo: true,
        orden: 0,
        renuncia: false,
        motivoRenuncia: "",
        llamadoId: 0,
        personaId: this.personaSeleccionada.id,
        persona: {
          id: this.personaSeleccionada.id,
          activo: this.personaSeleccionada.activo,
          tipoDeDocumento: {
            id: 0,
            activo: true,
            nombre: "string"
          },
          documento: this.personaSeleccionada.documento,
          primerNombre: this.personaSeleccionada.primerNombre,
          segundoNombre: this.personaSeleccionada.segundoNombre,
          primerApellido: this.personaSeleccionada.primerApellido,
          segundoApellido: this.personaSeleccionada.segundoApellido
        },
        tipoDeIntegranteId: this.tipoIntegranteSeleccionado.id,
        tipoDeIntegrante: {
          id: this.tipoIntegranteSeleccionado.id,
          activo: this.tipoIntegranteSeleccionado.activo,
          nombre: this.tipoIntegranteSeleccionado.nombre,
          orden: this.tipoIntegranteSeleccionado.orden
        }
      };
  
      console.log(data); // Imprimir los datos en la consola
  
      // Aquí realizar la llamada a la API para enviar los datos
    }
  }
  
  // Agrega aquí la función para crear un miembro de tribunal
}