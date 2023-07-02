import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alta-responsabilidades',
  templateUrl: './alta-responsabilidades.component.html',
  styleUrls: ['./alta-responsabilidades.component.css']
})
export class AltaResponsabilidadesComponent implements OnInit {
  apiUrl = 'http://localhost:5000/api/Responsabilidades';
  nombre?: string;
  descripcion?: string;
  areaId?: number;
  activo: boolean = true;  
  areas: any[] = [];
  
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerAreas();
  }

  guardarResponsabilidad() {
    const body = {
      id: 0,
      activo: true,
      nombre: this.nombre,
      descripcion: this.descripcion,
      area: {
        id: this.areaId,
        activo: true,
        nombre: 'string'
      },
      areaId: this.areaId
    };

    this.http.post<any>(this.apiUrl, body).subscribe(
      (response) => {
        console.log('Alta exitosa:', response);
        location.reload();
      },
      (error) => {
        console.error('Error en el alta:', error);
        this.successMessage = ''; // Reinicia el mensaje de éxito
        this.errorMessage = 'Error al crear responsabilidad'; // Asigna el mensaje de error
    
      }
    );
  }

  obtenerAreas() {
    const url = 'http://localhost:5000/api/Areas/Paged';
    const body = {
      limit: -1,
      offset: 0,
      id: 0,
      filters: {
        activo: true,
        nombre: ""
      },
      orders: ["string"]
    };

    this.http.post<any>(url, body).subscribe(response => {
      this.areas = response.list;
    });
  }

}
