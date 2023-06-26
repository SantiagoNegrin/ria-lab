import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-tipo-integrante',
  templateUrl: './listar-tipo-integrante.component.html',
  styleUrls: ['./listar-tipo-integrante.component.css']
})
export class ListarTipoIntegranteComponent implements OnInit {
  tipoIntegrantes: any[] = [];
  filtroNombre: string = '';
  currentPage: number = 1;
  totalPages: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerTipoIntegrantes();
  }

  obtenerTipoIntegrantes() {
    const url = 'http://localhost:5000/api/TiposDeIntegrantes/Paged';
    const body = {
      limit: 20,
      offset: (this.currentPage - 1) * 20,
      id: 0,
      filters: {
        activo: true,
        nombre: this.filtroNombre
      },
      orders: ['string']
    };

    this.http.post<any>(url, body).subscribe(response => {
      this.tipoIntegrantes = response.list;
      this.totalPages = response.totalPages;
    });
  }

  cambiarPagina(pagina: number) {
    this.currentPage = pagina;
    this.obtenerTipoIntegrantes();
  }

  get totalPagesArray() {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }
}
