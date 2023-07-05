import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/login/auth.service';
import * as moment from 'moment';

@Component({
  selector: 'app-modificar-postulante',
  templateUrl: './modificar-postulante.component.html',
  styleUrls: ['./modificar-postulante.component.css']
})
export class ModificarPostulanteComponent implements OnInit {
  postulanteSeleccionado: any = {
    persona: {
      id: 0,
      activo: true,
      tipoDeDocumento: {
        id: 0,
        activo: true,
        nombre: ''
      },
      documento: '',
      primerNombre: '',
      segundoNombre: '',
      primerApellido: '',
      segundoApellido: '',
      estudioMeritosRealizado: false,
      fechaHoraEntrevista: '',
      entrevistaRealizada: false
    }
  };
  admin: boolean = false;
  tribunal: boolean = false;
  coordinador: boolean = false;
  selectedDate?: string;
  selectedTime?: string;

  constructor(private route: ActivatedRoute, private http: HttpClient, private authService:AuthService) { }

  ngOnInit() {
    this.admin = this.authService.getRoles().includes("ADMIN");
    this.tribunal = this.authService.getRoles().includes("TRIBUNAL");
    this.coordinador = this.authService.getRoles().includes("COORDINADOR");
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.obtenerPostulante(id);
    });
  }

  obtenerPostulante(id: number) {
    const url = `http://localhost:5000/api/Postulantes/${id}`;
    this.http.get(url).subscribe((response: any) => {
      this.postulanteSeleccionado = response;
      console.log('RRRRRRRRRRRRRRR', response);
      this.selectedDate = moment(this.postulanteSeleccionado.fechaHoraEntrevista).format('YYYY-MM-DD');
      this.selectedTime = moment(this.postulanteSeleccionado.fechaHoraEntrevista).format('HH:mm');
    });
  }

  guardarCambios() {
    const url = `http://localhost:5000/api/Postulantes/${this.postulanteSeleccionado.id}`;
    const fechaEntrevista = moment(`${this.selectedDate} ${this.selectedTime}`, 'YYYY-MM-DD HH:mm').toISOString();
    this.postulanteSeleccionado.persona.fechaHoraEntrevista = fechaEntrevista;

    this.http.put(url, this.postulanteSeleccionado).subscribe((response: any) => {
      console.log('Cambios guardados exitosamente');
      console.log(response);
    });
  }
}
