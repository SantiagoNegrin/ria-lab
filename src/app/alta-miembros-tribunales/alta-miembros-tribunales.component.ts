import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alta-miembros-tribunales-componen',
  templateUrl: './alta-miembros-tribunales.component.html',
  styleUrls: ['./alta-miembros-tribunales.component.css']
})
export class AltaMiembrosTribunalesComponent {
  personas: any[] = [];
  tiposIntegrantes: any[] = [];
  tipoIntegranteSeleccionado: any;
  tipo: any = null;
  personaSeleccionada: any = null;
  orden: number = 0;
  llamadoId: number = 0;

  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerPersonas();
    if (this.tipo != null){
      this.tipoIntegranteSeleccionado = this.tipo;
    }else{
      this.obtenerTiposIntegrantes();
    }
  }

  obtenerPersonas() {
    const apiUrl = 'http://localhost:5000/api/Personas/Paged';
  
    const body = {
      limit: -1,
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
      limit: -1,
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
        orden: this.orden,
        renuncia: false,
        motivoRenuncia: "",
        llamadoId: this.llamadoId,
        personaId: this.personaSeleccionada.id,
        persona: this.personaSeleccionada,
         
        tipoDeIntegranteId: this.tipoIntegranteSeleccionado.id,
        tipoDeIntegrante: {
          id: this.tipoIntegranteSeleccionado.id,
          activo: this.tipoIntegranteSeleccionado.activo,
          nombre: this.tipoIntegranteSeleccionado.nombre,
          orden: this.tipoIntegranteSeleccionado.orden
        }
      };
  
      console.log(data); // Imprimir los datos en la consola
      const apiUrl = 'http://localhost:5000/api/MiembrosTribunales';
      this.http.post<any>(apiUrl, data).subscribe(response => {
        this.errorMessage = "";
        location.reload();
        
      }, error => {
        console.error(error);
        this.errorMessage = "Error al agregar miembro."
      });

    }else{
      this.errorMessage = "Completa todos los datos"
    }
  }
  
  // Agrega aquí la función para crear un miembro de tribunal
}