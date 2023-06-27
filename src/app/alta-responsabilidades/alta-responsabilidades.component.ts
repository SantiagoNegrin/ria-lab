import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-responsabilidades',
  templateUrl: './alta-responsabilidades.component.html',
  styleUrls: ['./alta-responsabilidades.component.css']
})
export class AltaResponsabilidadesComponent {
  apiUrl = 'http://localhost:5000/api/Responsabilidades';
  nombre?: string;
  descripcion?: string;
  areaId?: number;

  constructor(private http: HttpClient, private router: Router) { }

  crearResponsabilidades() {
    const body = {
      id: 0,
      activo: true,
      nombre: this.nombre,
      descripcion: this.descripcion,
      area: {
        id: this.areaId,
        activo: true,
        nombre: 'string'
      },
      areaId: this.areaId
    };

    this.http.post<any>(this.apiUrl, body).subscribe(
      (response) => {
        console.log('Alta exitosa:', response);
        const responsabilidadId = response.id;
        this.router.navigate(['/modificar-responsabilidad', responsabilidadId]);
      },
      (error) => {
        console.error('Error en el alta:', error);
      }
    );
  }
}
