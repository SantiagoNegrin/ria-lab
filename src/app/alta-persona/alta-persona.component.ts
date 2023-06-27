import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alta-persona',
  templateUrl: './alta-persona.component.html',
  styleUrls: ['./alta-persona.component.css']
})
export class AltaPersonaComponent implements OnInit {
  persona: any = {};
  tiposDocumento: any[] = [];
  selectedTipoDocumento: any;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerTiposDocumento();
  }

  obtenerTiposDocumento() {
    const apiUrl = 'http://localhost:5000/api/TiposDeDocumentos/Paged';
    const body = {
      limit: 1000000,
      offset: 0,
      id: 0,
      filters: {
        activo: true,
        nombre: ''
      },
      orders: ['string']
    };

    this.http.post<any>(apiUrl, body).subscribe(response => {
      this.tiposDocumento = response.list;
    });
  }

  crearPersona() {
    const apiUrl = 'http://localhost:5000/api/Personas';

    if (!this.selectedTipoDocumento) {
      this.errorMessage = 'Debe seleccionar un tipo de documento';
      return;
    }

    const tipoDocumentoSeleccionado = this.tiposDocumento.find(tipoDocumento => tipoDocumento.id === +this.selectedTipoDocumento);

    if (!tipoDocumentoSeleccionado) {
      this.errorMessage = 'Tipo de documento seleccionado no encontrado';
      return;
    }

    this.persona.tipoDeDocumento = tipoDocumentoSeleccionado;
    this.persona.activo = true;

    this.http.post<any>(apiUrl, this.persona).subscribe(response => {
      this.successMessage = 'Persona creada correctamente';
      this.persona = {}; // Limpiar los datos del formulario
    }, error => {
      this.errorMessage = 'Error al crear la persona';
    });
  }
}
