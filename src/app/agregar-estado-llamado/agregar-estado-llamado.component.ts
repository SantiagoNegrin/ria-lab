import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/login/auth.service';
import { Router } from '@angular/router';
import { count } from 'rxjs';

interface LlamadoEstadoPosible {
  id: number;
  activo: boolean;
  nombre: string;
}

interface LlamadoEstado {
  id: number;
  activo: boolean;
  fechaHora: string;
  usuarioTransicion: string;
  observacion: string;
  llamadoId: number;
  llamadoEstadoPosibleId: number;
  llamadoEstadoPosible: LlamadoEstadoPosible;
}

interface Llamado {
  id: number;
  activo: boolean;
  identificador: string;
  nombre: string;
  linkPlanillaPuntajes: string;
  linkActa: string;
  minutosEntrevista: number;
  areaId: number;
  area: {
    id: number;
    activo: boolean;
    nombre: string;
  };
  postulantes: {
    id: number;
    activo: boolean;
    fechaHoraEntrevista: string;
    estudioMeritosRealizado: boolean;
    entrevistaRealizada: boolean;
    llamadoId: number;
    personaId: number;
    persona: {
      id: number;
      activo: boolean;
      tipoDeDocumento: {
        id: number;
        activo: boolean;
        nombre: string;
      };
      documento: string;
      primerNombre: string;
      segundoNombre: string;
      primerApellido: string;
      segundoApellido: string;
    };
  }[];
  miembrosTribunal: {
    id: number;
    activo: boolean;
    orden: number;
    renuncia: boolean;
    motivoRenuncia: string;
    llamadoId: number;
    personaId: number;
    persona: {
      id: number;
      activo: boolean;
      tipoDeDocumento: {
        id: number;
        activo: boolean;
        nombre: string;
      };
      documento: string;
      primerNombre: string;
      segundoNombre: string;
      primerApellido: string;
      segundoApellido: string;
    };
    tipoDeIntegranteId: number;
    tipoDeIntegrante: {
      id: number;
      activo: boolean;
      nombre: string;
      orden: number;
    };
  }[];
  llamadoEstados: LlamadoEstado[];
  ultimoEstado: LlamadoEstado;
}

@Component({
  selector: 'app-agregar-estado-llamado',
  templateUrl: './agregar-estado-llamado.component.html',
  styleUrls: ['./agregar-estado-llamado.component.css']
})
export class AgregarEstadoLlamadoComponent implements OnInit {
  llamado: Llamado | null = null;
  llamadoEstadosPosibles: any[] = [];
  idLlamado?: number;
  idAccion?: number;
  idEstado: number = 0;
  observacion: string = '';
  successMessage: string ='';
  errorMessage: string ='';
  admin: boolean = this.authService.getRoles().includes("ADMIN");
  tribunal: boolean = this.authService.getRoles().includes("TRIBUNAL");
  coordinador: boolean = this.authService.getRoles().includes("COORDINADOR");
  auxCuentas: number = 0;
  proximoEstado: any = null;

  constructor(private route: ActivatedRoute, private http: HttpClient, private authService: AuthService,private router: Router) {}

  ngOnInit() {
    this.auxCuentas= this.idEstado + 1;
    this.obtenerLlamadosEstadosPosibles();
    this.obtenerLlamados();
  }

  obtenerLlamados() {
    this.http.get<Llamado>(`http://localhost:5000/api/Llamados/${this.idLlamado}`)
      .subscribe(
        (respuesta) => {
          this.llamado = respuesta;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  obtenerLlamadosEstadosPosibles() {
    const url = 'http://localhost:5000/api/LlamadosEstadosPosibles/Paged';
    const headers = new HttpHeaders()
      .set('accept', 'text/plain')
      .set('Content-Type', 'application/json');

    const body = {
      limit: 1000,
      offset: 0,
      id: 0,
      filters: {
        activo: true,
        nombre: ''
      },
      orders: ['string']
    };

    this.http.post<any>(url, body, { headers }).subscribe(
      (response) => {
        this.llamadoEstadosPosibles = response.list;
        if(this.idAccion === 1){
          this.proximoEstado = this.llamadoEstadosPosibles.find(value => value.id === this.idEstado + 1);
        }else{
          this.proximoEstado = this.llamadoEstadosPosibles.find(value => value.id === this.idEstado - 1);
        }
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  agregarEstadoLlamado() {
    const nombre = localStorage.getItem('nombre');
    console.log(nombre);
  
    if (this.idEstado !== undefined && this.idAccion !== undefined) {
      let llamadoEstadoPosibleId = this.idEstado;
  
      if (this.idAccion === 1) {
        llamadoEstadoPosibleId += 1;
  
        if (llamadoEstadoPosibleId >= 6) {
          console.log('Error: idEstado no puede ser mayor a 3 cuando idAccion es 1');
          return;
        }
      } else if (this.idAccion === 0) {
        llamadoEstadoPosibleId -= 1;
  
        if (llamadoEstadoPosibleId < 1) {
          console.log('Error: No se puede retroceder');
          return;
        }
      } else {
        console.log('Error: idAccion debe ser 0 o 1');
        return;
      }
  
      const data: any = {
        activo: true,
        fechaHora: new Date().toISOString(),
        usuarioTransicion: nombre,
        observacion: this.observacion,
        llamadoId: this.llamado?.id!,
        llamadoEstadoPosibleId: llamadoEstadoPosibleId,
      };
      
      const url = 'http://localhost:5000/api/LlamadosEstados';
      const headers = new HttpHeaders()
        .set('accept', 'text/plain')
        .set('Content-Type', 'application/json');
  
        this.http.post(url, data, { headers }).subscribe(
          (response) => {
            this.successMessage = 'Estado modificado correctamente.'
            location.reload();
          },
          (error) => {
            this.errorMessage = 'Ocurrió un error al modificar el estado del llamado.'
            console.log(error);
          }
        );
    }
  }
}
