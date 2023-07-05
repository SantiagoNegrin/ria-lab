import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AltaLlamadoComponent } from '../alta-llamado/alta-llamado.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth/login/auth.service';

@Component({
  selector: 'app-listar-llamados',
  templateUrl: './listar-llamados.component.html',
  styleUrls: ['./listar-llamados.component.css']
})
export class ListarLlamadosComponent implements OnInit {
  llamados: any[] = [];
  paginaActual = 1;
  filtroActivo: boolean|null = true;
  filtroNombre = '';
  filtroIdentificador = '';
  filtroTribunal = 0;
  filtroEstado = 0;
  estadosPosibles: any[] = [];
  miembrosTribunal: any[] = [];
  rolTribunal: boolean = this.authService.getRoles().includes("TRIBUNAL");
  admin: boolean = this.authService.getRoles().includes("ADMIN");
  currentPage: number = 1;
  totalPages: number = 1;
  pageSize: number = 10;
  totalCount: number = 0;

  constructor(private http: HttpClient, public modal: NgbModal, private authService: AuthService ) { }

  ngOnInit() {
    this.getMiembrosTribunal();
    this.getEstadosPosibles();
    if( this.rolTribunal == true){
      this.setearFiltroTribunal();
    }else{
      this.getLlamados();
    }
  }

  getLlamados() {
    const url = 'http://localhost:5000/api/Llamados/Paged';
    const body = {
      limit: this.pageSize,
      offset: (this.paginaActual - 1) * this.pageSize,
      id: 0,
      filters: {
        activo: this.filtroActivo,
        nombre: this.filtroNombre,
        identificador: this.filtroIdentificador,
        personaTribunalId: this.filtroTribunal,
        estadoId: this.filtroEstado
      },
      orders: ['string']
    };
    this.http.post<any>(url, body)
      .subscribe(response => {
        this.llamados = response.list;
        this.totalCount = response.totalCount;
        this.totalPages = response.totalPages;
      });
  }

  getEstadosPosibles() {
    const url = 'http://localhost:5000/api/LlamadosEstadosPosibles/Paged';    
    const body = {
      limit: -1,
      offset: 0,
      id: 0,
      filters: {
        activo: true,
        nombre: ""
      },
      orders: ['string']
    };
    this.http.post<any>(url, body)
      .subscribe(response => {
        this.estadosPosibles = response.list;
      });
  }

  getMiembrosTribunal() {
    const url = 'http://localhost:5000/api/MiembrosTribunales/Paged';    
    const body = {
      limit: -1,
      offset: 0,
      id: 0,
      filters: {
        activo: true,
        nombre: ""
      },
      orders: ['string']
    };
    this.http.post<any>(url, body)
      .subscribe(response => {
        this.miembrosTribunal = response.list;
      });
  }

  setearFiltroTribunal(){
    const doc = this.authService.getDoc();
    this.filtroTribunal = this.miembrosTribunal.find(value => value.persona.documento === doc);
    this.getLlamados();
  }

  aplicarFiltros() {
    this.paginaActual = 1;
    this.getLlamados();
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.getLlamados();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getLlamados();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getLlamados();
    }
  }

  openModal() {
		this.modal.open(AltaLlamadoComponent, { scrollable:true });
	}
  
}
