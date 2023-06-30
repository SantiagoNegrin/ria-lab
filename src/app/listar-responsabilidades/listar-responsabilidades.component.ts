import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-responsabilidades',
  templateUrl: './listar-responsabilidades.component.html',
  styleUrls: ['./listar-responsabilidades.component.css']
})
export class ListarResponsabilidadesComponent implements OnInit {
  apiUrl = 'http://localhost:5000/api/Responsabilidades/Paged';
  responsabilidades: any[] = [];
  filtroNombre: string = '';
  filtroActivo: string = '';
  filtroArea: number = 0;
  areas: any[] = [];
  totalPages: number = 0;
  currentPage: number = 1;
  limit: number = 10;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerResponsabilidades();
  }

  obtenerResponsabilidades() {
    const body = {
      limit: this.limit,
      offset: (this.currentPage - 1) * this.limit,
      id: 0,
      filters: {
        activo: this.filtroActivo !== '' ? JSON.parse(this.filtroActivo) : null,
        nombre: this.filtroNombre,
        areaId: this.filtroArea
      },
      orders: ["string"]
    };

    this.http.post<any>(this.apiUrl, body).subscribe(response => {
      this.responsabilidades = response.list;
      this.totalPages = response.totalPages;
    });
  }

  cambiarPagina(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.obtenerResponsabilidades();
    }
  }
  aplicarFiltro() {
    this.currentPage = 1;
    this.obtenerResponsabilidades();
  }
  obtenerPaginas(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
}
