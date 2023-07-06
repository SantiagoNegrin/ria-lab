import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/login/auth.service';
import { AltaPostulanteComponent } from '../alta-postulante/alta-postulante.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModificarPostulanteComponent } from '../modificar-postulante/modificar-postulante.component';

@Component({
  selector: 'app-listar-postulantes-llamado',
  templateUrl: './listar-postulantes-llamado.component.html',
  styleUrls: ['./listar-postulantes-llamado.component.css']
})
export class ListarPostulantesLlamadoComponent implements OnInit {
  nombreG: string = '';
  idG: string = '';
  identificadorG: string = '';
  postulantes: any[] = [];
  admin: boolean = this.authService.getRoles().includes("ADMIN");

  constructor(private http: HttpClient, private route: ActivatedRoute, public modal: NgbModal,private authService: AuthService) {}
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idG = params['idG'];
      this.nombreG = params['nombreG'];
      this.identificadorG = params['identificadorG'];
      this.fetchPostulantes();
      console.log('GET VALUES',this.nombreG,this.identificadorG,this.idG);
    });
  }

  fetchPostulantes() {
    const data = {
      limit: -1,
      offset: 0,
      id: 0,
      filters: {
        activo: true,
        nombre: this.nombreG,
        identificador: this.identificadorG,
        personaTribunalId: 0,
        estadoId: 0
      },
      orders: ['string']
    };

    this.http
      .post('http://localhost:5000/api/Llamados/Paged', data)
      .subscribe(
        (response: any) => {
          console.log('Response:', response);
          this.postulantes = response.list[0].postulantes;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }

  openModal(){
    const modalRef = this.modal.open(AltaPostulanteComponent, {scrollable: true});
    modalRef.componentInstance.idG = this.idG;
  }

  openModificar(id: string){
    const modalRef = this.modal.open(ModificarPostulanteComponent);
    modalRef.componentInstance.id = id;
}
}
