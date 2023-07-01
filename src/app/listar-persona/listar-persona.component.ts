import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.css']
})
export class ListarPersonaComponent implements OnInit {
  personas: any[] = [];
  filtroActivo: boolean = true;
  filtroNombre: string = '';
  totalPages: number = 0;
  currentPage: number = 1;
  limit: number = 10;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.obtenerPersonas();
  }

  obtenerPersonas() {
    const url = 'http://localhost:5000/api/Personas/Paged';
    const body = {
      limit: this.limit,
      offset: (this.currentPage - 1) * this.limit,
      id: -1,
      filters: {
        activo: this.filtroActivo,
        primerNombre: this.filtroNombre
      },
      orders: ['string']
    };

    this.http.post<any>(url, body).subscribe(response => {
      this.personas = response.list;
      this.totalPages = response.totalPages;
    });
  }

  modificarPersona(id: number) {
    this.router.navigate(['/modificar-persona', id]);
  }
  postularPersona(id: number) {
    this.router.navigate(['/postular-Persona', id]);
  }

  cambiarPagina(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.obtenerPersonas();
    }
  }

  aplicarFiltros() {
    this.currentPage = 1;
    this.obtenerPersonas();
  }

  obtenerPaginas(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
}
