import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AltaTipoIntegranteComponent } from '../alta-tipo-integrante/alta-tipo-integrante.component';
import { ModificarTipoIntegranteComponent } from '../modificar-tipo-integrante/modificar-tipo-integrante.component';

@Component({
  selector: 'app-listar-tipo-integrante',
  templateUrl: './listar-tipo-integrante.component.html',
  styleUrls: ['./listar-tipo-integrante.component.css']
})
export class ListarTipoIntegranteComponent implements OnInit {
  tipoIntegrantes: any[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  filtroNombre: string = '';
  filtroActivo: boolean | null = null;

  constructor(private http: HttpClient, public modal: NgbModal) { }

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
        activo: this.filtroActivo,
        nombre: this.filtroNombre
      },
      orders: ['string']
    };

    this.http.post<any>(url, body).subscribe(response => {
      this.tipoIntegrantes = response.list;
      this.totalPages = response.totalPages;
    });
  }

  applyFilters() {
    this.currentPage = 1;
    this.obtenerTipoIntegrantes();
  }

  cambiarPagina(pagina: number) {
    this.currentPage = pagina;
    this.obtenerTipoIntegrantes();
  }

  get totalPagesArray() {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  openModal() {
		this.modal.open(AltaTipoIntegranteComponent, { scrollable:true });
	}

  openModificar(id: string){
      const modalRef = this.modal.open(ModificarTipoIntegranteComponent);
      modalRef.componentInstance.tipoIntegranteId = id;
  }
}
