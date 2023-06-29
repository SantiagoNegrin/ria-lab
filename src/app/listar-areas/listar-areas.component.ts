import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-areas',
  templateUrl: './listar-areas.component.html',
  styleUrls: ['./listar-areas.component.css']
})
export class ListarAreasComponent implements OnInit {
  areas: any[] = [];
  filtroNombre: string = '';
  filtroActivo: boolean | null = null;
  totalPages: number = 0;
  currentPage: number = 1;
  limit: number = 10;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerAreas();
  }

  obtenerAreas() {
    const url = 'http://localhost:5000/api/Areas/Paged';
    const body = {
      limit: this.limit,
      offset: (this.currentPage - 1) * this.limit,
      id: 0,
      filters: {
        activo: this.filtroActivo,
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
