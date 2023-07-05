import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-llamados',
  templateUrl: './listar-llamados.component.html',
  styleUrls: ['./listar-llamados.component.css']
})
export class ListarLlamadosComponent implements OnInit {
  llamados: any[] = [];
  paginaActual = 1;
  filtroActivo = true;
  filtroNombre = '';
  filtroIdentificador = '';
  totalPages: number = 0;
  currentPage: number = 1;
  limit: number = 10;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getListarLlamados();
  }

  getListarLlamados() {
    const url = 'http://localhost:5000/api/Llamados/Paged';
    const body = {
      limit: this.limit,
      offset: (this.paginaActual - 1) * this.limit,
      id: 0,
      filters: {
        activo: this.filtroActivo,
        nombre: this.filtroNombre,
        identificador: this.filtroIdentificador
      },
      orders: ['string']
    };

    this.http.post<any>(url, body)
      .subscribe(response => {
        console.log(response);
        this.llamados = response.list;
        this.totalPages = response.totalPages;
      });
  }

  aplicarFiltros() {
    this.paginaActual = 1;
    this.getListarLlamados();
  }

  cambiarPagina(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.getListarLlamados();
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
