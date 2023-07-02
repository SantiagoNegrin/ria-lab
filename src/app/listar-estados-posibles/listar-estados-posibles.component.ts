import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AltaEstadosPosiblesComponent } from '../alta-estados-posibles/alta-estados-posibles.component';
import { ModificarPosiblesEstadosComponent } from '../modificar-posibles-estados/modificar-posibles-estados.component';

@Component({
  selector: 'app-listar-estados-posibles',
  templateUrl: './listar-estados-posibles.component.html',
  styleUrls: ['./listar-estados-posibles.component.css']
})
export class ListarEstadosPosiblesComponent implements OnInit {
  estadosPosibles: any[] = [];
  errorMessage: string = '';

  // Variables de paginado
  currentPage: number = 1;
  totalPages: number = 1;
  pageSize: number = 10;
  totalCount: number = 0;

  // Filtros
  activo: boolean | null = null;
  nombre: string = '';

  constructor(private http: HttpClient, public modal: NgbModal) { } // Agregar Router al constructor

  ngOnInit(): void {
    this.listarEstadosPosibles();
  }

  listarEstadosPosibles() {
    const url = 'http://localhost:5000/api/LlamadosEstadosPosibles/Paged';

    const body = {
      limit: this.pageSize,
      offset: (this.currentPage - 1) * this.pageSize,
      filters: {
        activo: this.activo,
        nombre: this.nombre
      },
      orders: ['string']
    };

    this.http.post<any>(url, body).subscribe(response => {
      this.estadosPosibles = response.list;
      this.totalCount = response.totalCount;
      this.totalPages = Math.ceil(this.totalCount / this.pageSize);
      console.log('Estados posibles obtenidos exitosamente:', this.estadosPosibles);
    }, error => {
      this.errorMessage = 'Error al obtener los estados posibles: ' + error.message;
      console.error('Error al obtener los estados posibles:', error);
    });
  }

  applyFilters() {
    this.currentPage = 1;
    this.listarEstadosPosibles();
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.listarEstadosPosibles();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.listarEstadosPosibles();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.listarEstadosPosibles();
    }
  }

  openModal() {
		this.modal.open(AltaEstadosPosiblesComponent, { scrollable:true });
	}

  openModificar(id: string){
      const modalRef = this.modal.open(ModificarPosiblesEstadosComponent);
      modalRef.componentInstance.estadoId = id;
  }

}
