import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alta-tipo-documento',
  templateUrl: './alta-tipo-documento.component.html',
  styleUrls: ['./alta-tipo-documento.component.css']
})
export class AltaTipoDocumentoComponent {
  altaTipoDocumentoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.altaTipoDocumentoForm = this.formBuilder.group({
      nombre: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.altaTipoDocumentoForm.invalid) {
      return;
    }

    const nombre = this.altaTipoDocumentoForm.value.nombre;

    const tipoDocumento = {
      id: 0,
      activo: true,
      nombre: nombre
    };

    this.http.post('http://localhost:5000/api/TiposDeDocumentos', tipoDocumento)
      .subscribe(
        (response) => {
          // Maneja la respuesta del servidor en caso de éxito
          console.log(response);

          // Realiza las acciones necesarias después del alta exitosa, como redireccionar o mostrar un mensaje de éxito
        },
        (error) => {
          // Maneja el error en caso de que la solicitud falle
          console.error(error);
        }
      );
  }
}
