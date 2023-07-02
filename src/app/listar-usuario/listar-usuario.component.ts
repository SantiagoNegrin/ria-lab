import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModificarUsuarioComponent } from '../modificar-usuario/modificar-usuario.component';
import { RolesUsuarioComponent } from "../roles-usuario/roles-usuario.component";
import { AltaUsuarioComponent } from '../alta-usuario/alta-usuario.component';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit{
  usuarios: any[] = [];
  errorMessage: string = '';

  // Variables de paginado
  currentPage: number = 1;
  totalPages: number = 1;
  pageSize: number = 10;
  totalCount: number = 0;

  // Filtros
  activo: boolean | null = null;
  nombre: string = '';
  idUsuario: string = '';
  username: string = '';
  email: string = '';
  documento: string = '';

  constructor(private http: HttpClient, private router: Router, public modal: NgbModal) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios() {
    const url = 'http://localhost:5000/api/Auth/Users';

    this.usuarios = [];
    const body = {
      limit: this.pageSize,
      offset: (this.currentPage - 1) * this.pageSize,
      id: 0,
      filters: {
        activo: this.activo,
        nombre: this.nombre,
        idUsuario: this.idUsuario,
        username: this.username,
        email: this.email,
        documento: this.documento
      },
      orders: ['string']
    };
    console.log(body);

    this.http.post<any>(url, body).subscribe(response => {
      this.usuarios = response.list;
      this.totalCount = response.totalCount;
      this.totalPages = Math.ceil(this.totalCount / this.pageSize);
      console.log('Usuarios obtenidos exitosamente:', this.usuarios);
    }, error => {
      this.errorMessage = 'Error al obtener los usuarios: ' + error.message;
      console.error('Error al obtener los usuarios:', error);
    });
  }

  applyFilters() {
    this.currentPage = 1;
    this.listarUsuarios();
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.listarUsuarios();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.listarUsuarios();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.listarUsuarios();
    }
  }

  openModal() {
		this.modal.open(AltaUsuarioComponent, { scrollable:true });
	}

  openModificar(id: string){
      const modalRef = this.modal.open(ModificarUsuarioComponent);
      modalRef.componentInstance.id = id;
  }

  openRoles(id: string){
    const modalRef = this.modal.open(RolesUsuarioComponent);
    modalRef.componentInstance.id = id;
  }

}
