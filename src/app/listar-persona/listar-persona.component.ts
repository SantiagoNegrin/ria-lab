import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AltaPersonaComponent } from '../alta-persona/alta-persona.component';
import { ModificarPersonaComponent } from '../modificar-persona/modificar-persona.component';

@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.css']
})
export class ListarPersonaComponent implements OnInit {
  personas: any[] = [];
  filtroActivo: boolean | null = null;
  filtroNombre: string = '';
  totalPages: number = 0;
  currentPage: number = 1;
  limit: number = 10;

  constructor(private http: HttpClient, private router: Router, public modal: NgbModal) { }

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

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.obtenerPersonas();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.obtenerPersonas();
    }
  }

  aplicarFiltros() {
    this.currentPage = 1;
    this.obtenerPersonas();
  }

  openModal() {
		this.modal.open(AltaPersonaComponent, { scrollable:true });
	}

  openModificar(id: string){
    const modalRef = this.modal.open(ModificarPersonaComponent);
    modalRef.componentInstance.personaId = id;
  }

}
