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
  id: number = 0;
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
  nombre: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private authService:AuthService) { }

  ngOnInit() {
    this.obtenerPostulante(this.id);
  }

  obtenerPostulante(id: number) {
    const url = `http://localhost:5000/api/Postulantes/${id}`;
    this.http.get(url).subscribe((response: any) => {
      this.postulanteSeleccionado = response;
      this.nombre = this.postulanteSeleccionado.persona.primerNombre + ' ' + this.postulanteSeleccionado.persona.primerApellido;
      this.selectedDate = moment(this.postulanteSeleccionado.fechaHoraEntrevista).format('YYYY-MM-DD');
      this.selectedTime = moment(this.postulanteSeleccionado.fechaHoraEntrevista).format('HH:mm');
    });
  }

  guardarCambios() {
    const url = `http://localhost:5000/api/Postulantes/${this.postulanteSeleccionado.id}`;
    const fechaEntrevista = moment(`${this.selectedDate} ${this.selectedTime}`, 'YYYY-MM-DD HH:mm').toISOString();
    this.postulanteSeleccionado.fechaHoraEntrevista = fechaEntrevista;

    this.http.put(url, this.postulanteSeleccionado).subscribe(
      response => {
        this.successMessage = 'Los cambios se guardaron correctamente.';
        this.errorMessage = '';
        location.reload();
      },
      error => {
        this.errorMessage = 'Ocurrió un error al guardar los cambios. Por favor, inténtalo de nuevo.';
        this.successMessage = '';
      }
    );
  }
}
