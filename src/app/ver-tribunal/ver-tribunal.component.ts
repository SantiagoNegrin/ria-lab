import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/login/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AltaMiembrosTribunalesComponent } from '../alta-miembros-tribunales/alta-miembros-tribunales.component';

@Component({
  selector: 'app-ver-tribunal',
  templateUrl: './ver-tribunal.component.html',
  styleUrls: ['./ver-tribunal.component.css']
})
export class VerTribunalComponent {
  llamadoId: number = 0;
  puestos: string[] = [];
  tipos: any[] = [];
  tiposnombres: string [] = [];
  miembrosTribunal: any[] = [];
  users: any[] = [];
  admin: boolean = this.authService.getRoles().includes("ADMIN");
  rolTribunal: boolean = this.authService.getRoles().includes("TRIBUNAL");
  motivo: string = "";
  llamado: string = "";

  constructor(private http: HttpClient, private route: ActivatedRoute, 
    private authService: AuthService, private modalService: NgbModal)  { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.llamadoId = id;
      this.getMiembros(id);
    });
  }

  getUser(puesto: string, tipo: number): any[] {
    return this.users.filter(user => user.puesto === puesto && user.tipo.id === tipo);  
  }

  getMiembros( id: number){
    const url = `http://localhost:5000/api/Llamados/${id}`;
    this.http.get<any>(url).subscribe(response => {
      if (response && response.id) { 
        this.miembrosTribunal = response.miembrosTribunal;
        this.llamado = response.identificador + ' - ' + response.nombre;
        this.miembrosTribunal.forEach(u => {
          let user = {
            id: u.id,
            persona: u.persona,
            puesto: u.orden,
            tipo: u.tipoDeIntegrante, 
            renuncia: u.renuncia,
            motivo: u.motivoRenuncia
          }
          this.users.push(user);
        });

        console.log(this.users);

        this.puestos = Array.from(new Set(this.users.map(user => user.puesto)));
        this.tipos = Array.from(new Set(this.users.map(user => user.tipo)));
        console.log(this.tipos);
        this.tipos.sort((a, b) => a.orden - b.orden);
        this.tipos = this.tipos.filter(
          (value, index, self) =>
            index === self.findIndex((obj) => obj.nombre === value.nombre)
        );

       /* this.tiposnombres = this.tipos;
        this.tiposnombres = this.tiposnombres.filter((value, index, self) => self.indexOf(value) === index);
*/
        console.log(this.tipos);
    
      } else {
        console.error('No se encontro el llamado');
      }
    }, error => {
      console.error('Error al obtener los miembros del tribunal:', error);
    });
  }

  openMotivo(content:any, id: number){
    const u = this.users.find(user => user.persona.id === id)
    this.motivo = u.motivo;
    this.modalService.open(content, { centered: true });
  }

  confirmarEliminacion(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este miembro del tribunal?')) {
      const url = `http://localhost:5000/api/MiembrosTribunales/${id}`;

      this.http.delete<any>(url).subscribe(
        () => {
          console.log('Usuario eliminado');
          location.reload();
        },
        error => {
          console.error('Error al eliminar el usuario', error);
        }
      );
    }
  }

  agregarMiembro(){
    const modalRef = this.modalService.open(AltaMiembrosTribunalesComponent);
    modalRef.componentInstance.llamadoId = this.llamadoId;
  }

  agregarPorTipoOrden(tipo: any, orden: any){
    const modalRef = this.modalService.open(AltaMiembrosTribunalesComponent);
      modalRef.componentInstance.llamadoId = this.llamadoId;
      modalRef.componentInstance.tipo = tipo;
      modalRef.componentInstance.orden = orden;
  }

  renuncia(content: any){
    this.motivo = "";
    this.modalService.open(content, { centered: true });
  }

  confirmarRenuncia(){
    
  }
  

}
