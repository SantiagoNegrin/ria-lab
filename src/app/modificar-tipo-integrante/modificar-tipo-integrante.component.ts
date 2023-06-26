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
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe(params => {
      this.tipoIntegranteId = params['id'];
    });
  }

  ngOnInit() {
    this.obtenerTipoIntegrante();
  }

  obtenerTipoIntegrante() {
    const url = `http://localhost:5000/api/TiposDeIntegrantes/${this.tipoIntegranteId}`;

    this.http.get<any>(url).subscribe(response => {
      this.nombre = response.nombre;
      this.orden = response.orden;
    });
  }

  modificarTipoIntegrante() {
    const url = `http://localhost:5000/api/TiposDeIntegrantes/${this.tipoIntegranteId}`;
    const body = {
      id: this.tipoIntegranteId,
      activo: true,
      nombre: this.nombre,
      orden: this.orden
    };

    this.http.put(url, body).subscribe(
      (response) => {
        console.log('Modificación exitosa:', response);
        // Realiza acciones adicionales después de una modificación exitosa
        this.successMessage = `Se modificó con éxito el tipo de integrante.`;
      this.errorMessage = '';
      },
      (error) => {
        console.error('Error en la modificación:', error);
        this.successMessage = '';
      this.errorMessage = `Error al modificar el tipo de integrante. Por favor, inténtelo nuevamente.`;
    
        // Maneja el error de la modificación
      }
    );
  }
}
