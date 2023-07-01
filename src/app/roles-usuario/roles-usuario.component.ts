import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-roles-usuario',
  templateUrl: './roles-usuario.component.html',
  styleUrls: ['./roles-usuario.component.css']
})
export class RolesUsuarioComponent implements OnInit {
  rolesUser: any[] = [];
  rolesDisp: any[] = [];
  selectedRole: string = '';
  id: string = '';
  nombre: string = '';

  errorMessage: string = '';
  successMessage: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.obtenerRoles();
    /*this.route.params.subscribe(params => {
      this.id = params['id'];*/
      this.obtenerUsuario(this.id);
    //});
  }

  obtenerUsuario(id: string) {
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
        this.rolesUser = response.list[0].roles;
        this.nombre = response.list[0].persona.primerNombre + ' ' + response.list[0].persona.primerApellido;
      } else {
        console.error('No se pudo obtener el usuario');
      }
    }, error => {
      console.error('Error al obtener el usuario:', error);
    });
  }

  obtenerRoles() {
    const url = 'http://localhost:5000/api/Auth/Users/Roles';

    this.http.get<any>(url).subscribe(response => {
      this.rolesDisp = response;
    }, error => {
      console.error('Error al obtener los roles', error);
    });
  }

  addRole(role: string) {
    const url = `http://localhost:5000/api/Auth/Users/UserRoles`;
    const data = {
      userId: this.id,
      roleId: role
    }
    console.log(data);
    this.http.post<any>(url, data).subscribe(
      response => {
        this.successMessage = 'Rol asignado.';
        this.errorMessage = '';
        // Agregar el rol seleccionado a la lista de roles del usuario
        if (!this.rolesUser.includes(role)) {
          this.rolesUser.push(role);
        }
      },
      error => {
        console.log(error);
        this.errorMessage = 'Ocurrió un error al asignar el rol. Por favor, inténtalo de nuevo.';
        this.successMessage = '';
      }
    );

  }

  removeRole(role: string) {
    const url = `http://localhost:5000/api/Auth/Users/UserRoles`;
    const data = {
      userId: this.id,
      roleId: role
    }
    this.http.delete<any>(url, { body: data }).subscribe(
      response => {
        this.successMessage = 'Rol removido.';
        this.errorMessage = '';
        const index = this.rolesUser.indexOf(role);
        if (index > -1) {
          this.rolesUser.splice(index, 1);
        }
      },
      error => {
        this.errorMessage = 'Ocurrió un error al quitar el rol. Por favor, inténtalo de nuevo.';
        this.successMessage = '';
      }
    );   
  }

}