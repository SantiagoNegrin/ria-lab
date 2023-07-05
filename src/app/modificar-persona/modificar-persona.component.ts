import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar-persona',
  templateUrl: './modificar-persona.component.html',
  styleUrls: ['./modificar-persona.component.css']
})
export class ModificarPersonaComponent implements OnInit {
  personaId: string = '';
  persona: any = {};
  tiposDocumento: any[] = [];
  errorMessage: string = ''; 
  successMessage: string = ''; 

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      
      this.obtenerPersona(this.personaId);
    });

    this.obtenerTiposDocumento();
  }

  obtenerPersona(id: string) {
    const url = `http://localhost:5000/api/Personas/${id}`;
    this.http.get<any>(url).subscribe(response => {
      if (response && response.id) { 
        this.persona = response;
      } else {
        console.error('No se pudo obtener la persona');
      }
    }, error => {
      console.error('Error al obtener la persona:', error);
    });
  }

  guardarCambios() {
    const url = `http://localhost:5000/api/Personas/${this.persona.id}`;
    this.http.put<any>(url, this.persona).subscribe(
      response => {
        this.successMessage = 'Los cambios se guardaron correctamente.';
        this.errorMessage = '';
      },
      error => {
        this.errorMessage = 'Ocurrió un error al guardar los cambios. Por favor, inténtalo de nuevo.';
        this.successMessage = '';
      }
    );
  }

  obtenerTiposDocumento() {
    const url = 'http://localhost:5000/api/TiposDeDocumentos/Paged';
    const body = {
      limit: 100,
      offset: 0,
      id: 0,
      filters: {
        activo: true,
        nombre: ''
      },
      orders: ['string']
    };

    this.http.post<any>(url, body).subscribe(response => {
      if (response && response.list) { 
        this.tiposDocumento = response.list;
      } else {
        console.error('No se pudieron obtener los tipos de documento');
      }
    }, error => {
      console.error('Error al obtener los tipos de documento:', error);
    });
  }
}
