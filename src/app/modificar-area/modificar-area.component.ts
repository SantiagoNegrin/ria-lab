import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modificar-area',
  templateUrl: './modificar-area.component.html',
  styleUrls: ['./modificar-area.component.css']
})
export class ModificarAreaComponent {
  public areaId: number = 2;
  public activo: boolean = true;
  public nombre: string = "";
  public areaEncontrada: any;
  public error: string = "";
  public successMessage: string = "";

  constructor(private http: HttpClient) { }

  getAreaById(id: number): void {
    const url = `http://localhost:5000/api/Areas/${id}`;
    this.http.get<any>(url).subscribe(
      (response) => {
        // Aquí puedes hacer lo que necesites con los datos del área devueltos
        console.log('Área:', response);
        this.areaEncontrada = response;
      },
      (error) => {
        console.log('Error al obtener el área:', error);
        this.error = `Error al obtener el área${id}`;
      }
    );
  }
  modificarArea(): void {
    const url = `http://localhost:5000/api/Areas/${this.areaEncontrada.id}`; // Reemplaza con la URL de tu endpoint
    const body = {
      // Aquí define los datos que deseas enviar en la solicitud PUT
      // Ejemplo:
      id: this.areaEncontrada.id,
      nombre: this.areaEncontrada.nombre,
      activo: this.areaEncontrada.activo
    };

    this.http.put(url, body).subscribe(
      (response) => {
        console.log('Solicitud PUT exitosa:', response);
        // Realiza acciones adicionales después de una solicitud PUT exitosa
        this.successMessage  = `Se modifico con exito el area con id = ${this.areaEncontrada.id}`;
      },
      (error) => {
        console.error('Error en la solicitud PUT:', error);
        // Maneja el error de la solicitud PUT
        this.error = `Error al modificar el área con id = ${this.areaEncontrada.id}`;
      }
    );
  }

}