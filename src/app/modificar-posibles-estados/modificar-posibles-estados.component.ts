import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar-posibles-estados',
  templateUrl: './modificar-posibles-estados.component.html',
  styleUrls: ['./modificar-posibles-estados.component.css']
})
export class ModificarPosiblesEstadosComponent implements OnInit {
  estadoId: number = 0;
  activo: boolean = true;
  nombre: string = '';

  errorMessage: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerEstadoActual();
  }

  obtenerEstadoActual() {
    const url = `http://localhost:5000/api/LlamadosEstadosPosibles/${this.estadoId}`;
    this.http.get(url).subscribe(response => {
      const estadoActual = response as any;
      this.activo = estadoActual.activo;
      this.nombre = estadoActual.nombre;
    }, error => {
      this.errorMessage = 'Error al obtener el estado: ' + error.message;
      console.error('Error al obtener el estado:', error);
    });
  }

  modificarEstado() {
    const url = `http://localhost:5000/api/LlamadosEstadosPosibles/${this.estadoId}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'text/plain'
    });

    const body = {
      id: this.estadoId,
      activo: this.activo,
      nombre: this.nombre
    };

    this.http.put(url, body, { headers }).subscribe(response => {
      console.log('Estado modificado exitosamente:', response);
      location.reload();
    }, error => {
      this.errorMessage = `Error al modificar el estado posible. Por favor, inténtelo nuevamente.`;
      console.error('Error al modificar el estado:', error);
    });
  }
}
