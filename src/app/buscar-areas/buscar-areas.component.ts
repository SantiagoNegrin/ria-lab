import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-buscar-areas',
  templateUrl: './buscar-areas.component.html',
  styleUrls: ['./buscar-areas.component.css']
})

export class BuscarAreasComponent implements OnInit {
  public area: any; // Propiedad para almacenar los datos del área
  public areaId: number = 2;
  public error: string = "";
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.areaId = 0;
    // Lógica que deseas ejecutar cuando se inicialice el componente
  }
 
  getAreaById(id: number): void {
    const url = `http://localhost:5000/api/Areas/${id}`;
    this.http.get<any>(url).subscribe(
      (response) => {
        // Aquí puedes hacer lo que necesites con los datos del área devueltos
        console.log('Área:', response);
        this.area = response;
      },
      (error) => {
        console.log('Error al obtener el área:', error);
        this.error = `Error al obtener el área${id}`;
      }
    );
  }
}