import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  areas: any[] = [];
  filtroNombre: string = '';
  totalPages: number = 0;
  currentPage: number = 1;
  limit: number = 10;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.obtenerAreas();
  }

  crearResponsabilidades() {
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
        const responsabilidadId = response.id;
        this.successMessage = 'Alta exitosa'; // Asigna el mensaje de éxito
        this.errorMessage = ''; // Reinicia el mensaje de error
      
     
      },
      (error) => {
        console.error('Error en el alta:', error);
        this.successMessage = ''; // Reinicia el mensaje de éxito
      this.errorMessage = 'Error en el alta'; // Asigna el mensaje de error
    
      }
    );
  }

  obtenerAreas() {
    const url = 'http://localhost:5000/api/Areas/Paged';
    const body = {
      limit: this.limit,
      offset: (this.currentPage - 1) * this.limit,
      id: 0,
      filters: {
        activo: true,
        nombre: this.filtroNombre
      },
      orders: ["string"]
    };

    this.http.post<any>(url, body).subscribe(response => {
      this.areas = response.list;
      this.totalPages = response.totalPages;
    });
  }

  cambiarPagina(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.obtenerAreas();
    }
  }

  obtenerPaginas(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
}
