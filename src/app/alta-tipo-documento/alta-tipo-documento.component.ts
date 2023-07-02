import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alta-tipo-documento',
  templateUrl: './alta-tipo-documento.component.html',
  styleUrls: ['./alta-tipo-documento.component.css']
})
export class AltaTipoDocumentoComponent {
  successMessage: string = '';
  errorMessage: string = '';
  activo:boolean = true;
  
  altaTipoDocumentoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.altaTipoDocumentoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      activo: [true]
    });
  }

  onSubmit(): void {
    if (this.altaTipoDocumentoForm.invalid) {
      return;
    }

    const nombre = this.altaTipoDocumentoForm.value.nombre;
    const activo = this.altaTipoDocumentoForm.value.activo;

    const tipoDocumento = {
      id: 0,
      activo: activo,
      nombre: nombre
    };

    this.http.post('http://localhost:5000/api/TiposDeDocumentos', tipoDocumento)
      .subscribe(
        (response) => {
          console.log(response);
          //this.successMessage = 'Tipo de documento creado'; 
          this.errorMessage = ''; 
          location.reload();
      },
        (error) => {
          
          console.error(error);
          this.successMessage = ''; 
          this.errorMessage = 'Error al crear tipo de documento'; 
        }
      );
  }
}
