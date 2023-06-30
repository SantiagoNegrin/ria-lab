import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modificar-area',
  templateUrl: './modificar-area.component.html',
  styleUrls: ['./modificar-area.component.css']
})
export class ModificarAreaComponent implements OnInit {
  public areaId: number = 0;
  public activo: boolean = true;
  public nombre: string = "";
  public areaEncontrada: any;
  public error: string = "";
  public successMessage: string = "";

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.areaId = +params['id'];
      this.nombre = params['nombre'];
      this.getAreaById(this.areaId);
    });
  }

  getAreaById(id: number): void {
    const url = `http://localhost:5000/api/Areas/${id}`;
    this.http.get<any>(url).subscribe(
      (response) => {
        console.log('Área:', response);
        this.areaEncontrada = response;
      },
      (error) => {
        console.log('Error al obtener el área:', error);
        this.error = `Error al obtener el área ${id}`;
      }
    );
  }

  modificarArea(): void {
    const url = `http://localhost:5000/api/Areas/${this.areaEncontrada.id}`;
    const body = {
      id: this.areaEncontrada.id,
      nombre: this.areaEncontrada.nombre,
      activo: this.areaEncontrada.activo
    };
  
    this.http.put(url, body).subscribe(
      (response) => {
        console.log('Solicitud PUT exitosa:', response);
        this.successMessage = `Se modificó con éxito el área con id = ${this.areaEncontrada.id}`;
      },
      (error) => {
        console.error('Error en la solicitud PUT:', error);
        this.error = `Error al modificar el área con id = ${this.areaEncontrada.id}`;
      }
    );
  }
}
