import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modificar-tipo-documento',
  templateUrl: './modificar-tipo-documento.component.html',
  styleUrls: ['./modificar-tipo-documento.component.css']
})
export class ModificarTipoDocumentoComponent implements OnInit {
  tipoDocumentoId: number = 0;
  nombre: string = '';
  successMessage: string = '';
  errorMessage: string = '';
  activo: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
   /* this.route.params.subscribe(params => {
      this.tipoDocumentoId = params['id'];
    });*/
  }

  ngOnInit() {
    this.obtenerTipoDocumento();
  }

  obtenerTipoDocumento() {
    const url = `http://localhost:5000/api/TiposDeDocumentos/${this.tipoDocumentoId}`;

    this.http.get<any>(url).subscribe(response => {
      this.nombre = response.nombre;
      this.activo = response.activo;
    });
  }

  modificarTipoDocumento() {
    const url = `http://localhost:5000/api/TiposDeDocumentos/${this.tipoDocumentoId}`;
    const body = {
      id: this.tipoDocumentoId,
      activo: this.activo, 
      nombre: this.nombre
    };

    this.http.put(url, body).subscribe(
      (response) => {
        console.log('Modificación exitosa:', response);
        location.reload();
      },
      (error) => {
        console.error('Error en la modificación:', error);
        this.successMessage = '';
        this.errorMessage = `Error al modificar el tipo de documento. Por favor, inténtelo nuevamente.`;
      }
    );
  }
}
