import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-area',
  templateUrl: './crear-area.component.html',
  styleUrls: ['./crear-area.component.css']
})
export class CrearAreaComponent {
  public activo: boolean = true;
  public nombre: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Lógica que deseas ejecutar cuando se inicialice el componente
  }

  crearArea(): void {
    const url = 'http://localhost:5000/api/Areas';
    const area = {
      activo: this.activo,
      nombre: this.nombre
    };

    this.http.post(url, area).subscribe(
      (response) => {
        console.log('Área creada:', response);
        // Realiza otras acciones después de crear el área
      },
      (error) => {
        console.log('Error al crear el área:', error);
        // Realiza acciones en caso de error
      }
    );
  }
 
}