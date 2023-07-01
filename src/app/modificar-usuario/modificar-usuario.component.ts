import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {
  usuario: any = {};
  tiposDocumento: any[] = [];
  errorMessage: string = ''; 
  successMessage: string = ''; 

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.obtenerTiposDocumento();
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.obtenerUsuario(id);
    });
  }

  obtenerUsuario(id: number) {
    const url = 'http://localhost:5000/api/Auth/Users';
    const body = {
      limit: 1,
      offset: 0,
      id: 0,
      filters: {
        activo: null,
        nombre: "",
        idUsuario: id,
        username: "",
        email: "",
        documento: ""
      },
      orders: ['string']
    };
    console.log(body);

    this.http.post<any>(url, body).subscribe(response => {
      
      if (response && response.list[0].id) { 
        const u = response.list[0];
        this.usuario = {
          id: u.id,
          tipoDocumentoId: u.persona.tipoDeDocumento.id,
          documento: u.persona.documento,
          primerNombre: u.persona.primerNombre,
          segundoNombre: u.persona.segundoNombre,
          primerApellido: u.persona.primerApellido,
          segundoApellido: u.persona.segundoApellido,
          email: u.email,
          imagen: u.imagen,
          activo: u.activo
        }
        console.log(this.usuario);
      } else {
        console.error('No se pudo obtener el usuario');
      }
    }, error => {
      console.error('Error al obtener el usuario:', error);
    });
  }

  guardarCambios() {
    const url = `http://localhost:5000/api/Auth/Users`;
    this.http.put<any>(url, this.usuario).subscribe(
      response => {
        this.successMessage = 'Los cambios se guardaron correctamente.';
        this.errorMessage = '';
        
      },
      error => {
        this.errorMessage = 'Ocurrió un error al guardar los cambios. Por favor, inténtalo de nuevo.';
        this.successMessage = '';
      }
    );
  }

  obtenerTiposDocumento() {
    const url = 'http://localhost:5000/api/TiposDeDocumentos/Paged';
    const body = {
      limit: 100,
      offset: 0,
      id: 0,
      filters: {
        activo: true,
        nombre: ''
      },
      orders: ['string']
    };

    this.http.post<any>(url, body).subscribe(response => {
      if (response && response.list) { 
        this.tiposDocumento = response.list;
      } else {
        console.error('No se pudieron obtener los tipos de documento');
      }
    }, error => {
      console.error('Error al obtener los tipos de documento:', error);
    });
  }
}
