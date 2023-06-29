import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alta-postulantes',
  templateUrl: './alta-postulantes.component.html',
  styleUrls: ['./alta-postulantes.component.css']
})
export class AltaPostulantesComponent implements OnInit {
  postulante: any = {};
  tiposDocumentos: any[] = []; // Array para almacenar los tipos de documentos

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerTiposDocumentos(); // Llamada al método para obtener los tipos de documentos al inicializar el componente
  }

  obtenerTiposDocumentos() {
    const apiUrl = 'http://localhost:5000/api/TiposDeDocumentos/Paged';

    const body = {
      limit: 100,
      offset: 0,
      id: 0,
      filters: {
        activo: true,
        nombre: ''
      },
      orders: [
        'string'
      ]
    };

    this.http.post<any>(apiUrl, body).subscribe(response => {
      this.tiposDocumentos = response.data; // Asignar los tipos de documentos al array
      console.log('Tipos de documentos:', this.tiposDocumentos);
    });
  }

  crearPostulante() {
    const apiUrl = 'http://localhost:5000/api/Personas';

    const body = {
      id: 0,
      activo: true,
      tipoDeDocumento: this.postulante.persona.tipoDeDocumento,
      documento: this.postulante.persona.documento,
      primerNombre: this.postulante.persona.primerNombre,
      segundoNombre: this.postulante.persona.segundoNombre,
      primerApellido: this.postulante.persona.primerApellido,
      segundoApellido: this.postulante.persona.segundoApellido
    };

    this.http.post<any>(apiUrl, body).subscribe(response => {
      console.log('Postulante creado:', response);
      // Puedes redirigir a una página de éxito o realizar otras acciones después de crear el postulante
    });
  }
}
