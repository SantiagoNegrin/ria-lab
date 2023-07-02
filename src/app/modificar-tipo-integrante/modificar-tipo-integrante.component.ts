import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modificar-tipo-integrante',
  templateUrl: './modificar-tipo-integrante.component.html',
  styleUrls: ['./modificar-tipo-integrante.component.css']
})
export class ModificarTipoIntegranteComponent {
  tipoIntegranteId: number = 0;
  nombre: string = '';
  orden: number = 0;
  activo: boolean = true;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerTipoIntegrante();
  }

  obtenerTipoIntegrante() {
    const url = `http://localhost:5000/api/TiposDeIntegrantes/${this.tipoIntegranteId}`;

    this.http.get<any>(url).subscribe(response => {
      this.nombre = response.nombre;
      this.orden = response.orden;
      this.activo = response.activo;
    });
  }

  modificarTipoIntegrante() {
    const url = `http://localhost:5000/api/TiposDeIntegrantes/${this.tipoIntegranteId}`;
    const body = {
      id: this.tipoIntegranteId,
      activo: this.activo,
      nombre: this.nombre,
      orden: this.orden
    };

    this.http.put(url, body).subscribe(
      (response) => {
        console.log('Modificación exitosa:', response);
        location.reload();
      },
      (error) => {
        console.error('Error en la modificación:', error);
        this.successMessage = '';
        this.errorMessage = `Error al modificar el tipo de integrante. Por favor, inténtelo nuevamente.`;
      }
    );
  }
}
