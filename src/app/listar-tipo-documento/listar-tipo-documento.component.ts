import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AltaTipoDocumentoComponent } from '../alta-tipo-documento/alta-tipo-documento.component';
import { ModificarTipoDocumentoComponent } from '../modificar-tipo-documento/modificar-tipo-documento.component';

@Component({
  selector: 'app-listar-tipo-documento',
  templateUrl: './listar-tipo-documento.component.html',
  styleUrls: ['./listar-tipo-documento.component.css']
})
export class ListarTipoDocumentoComponent implements OnInit {
  tiposDocumento: any[] = [];
  filtroNombre: string = '';
  filtroActivo: boolean | null = null;
  totalPages: number = 0;
  currentPage: number = 1;
  limit: number = 10;

  constructor(private http: HttpClient, public modal: NgbModal) { }

  ngOnInit() {
    this.obtenerTiposDocumento();
  }

  obtenerTiposDocumento() {
    const url = 'http://localhost:5000/api/TiposDeDocumentos/Paged';
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
      this.tiposDocumento = response.list;
      this.totalPages = response.totalPages;
    });
  }

  cambiarPagina(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.obtenerTiposDocumento();
    }
  }

  obtenerPaginas(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  aplicarFiltro() {
    this.currentPage = 1;
    this.obtenerTiposDocumento();
  }

  openModal() {
		this.modal.open(AltaTipoDocumentoComponent, { scrollable:true });
	}

  openModificar(id: string){
      const modalRef = this.modal.open(ModificarTipoDocumentoComponent);
      modalRef.componentInstance.tipoDocumentoId = id;
  }

}
