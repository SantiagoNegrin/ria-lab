import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {
  usuario: any = {};
  tiposDocumento: any[] = [];
  selectedTipoDocumento: number = 0;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerTiposDocumento();
  }

  obtenerTiposDocumento() {
    const apiUrl = 'http://localhost:5000/api/TiposDeDocumentos/Paged';
    const body = {
      limit: -1,
      offset: 0,
      id: 0,
      filters: {
        activo: true,
        nombre: ''
      },
      orders: ['string']
    };

    this.http.post<any>(apiUrl, body).subscribe(response => {
      this.tiposDocumento = response.list;
    });
  }

  crearUsuario() {
    const apiUrl = 'http://localhost:5000/api/Auth/Register';

    if (!this.selectedTipoDocumento) {
      this.errorMessage = 'Debe seleccionar un tipo de documento';
      return;
    }

    this.usuario.id = "";
    this.usuario.imagen = "";
    this.usuario.tipoDeDocumento = this.selectedTipoDocumento;
    this.usuario.activo = true;

    console.log(this.usuario);


    this.http.post<any>(apiUrl, this.usuario).subscribe(response => {
      this.errorMessage = '';
      this.successMessage = 'Usuario registrado correctamente';
      this.usuario = {};
    }, error => {
      this.errorMessage = 'Error al registrar el usuario';
      console.log(error);
    });
  }
}
