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
  estadoActivo: boolean = true;
  estadoNombre: string = '';

  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.estadoId = parseInt(idParam, 10);
        this.obtenerEstadoActual();
      }
    });
  }

  obtenerEstadoActual() {
    const url = `http://localhost:5000/api/LlamadosEstadosPosibles/${this.estadoId}`;
    this.http.get(url).subscribe(response => {
      const estadoActual = response as any;
      this.estadoActivo = estadoActual.activo;
      this.estadoNombre = estadoActual.nombre;
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
      activo: this.estadoActivo,
      nombre: this.estadoNombre
    };

    this.http.put(url, body, { headers }).subscribe(response => {
      this.successMessage = 'Estado modificado exitosamente';
      console.log('Estado modificado exitosamente:', response);
    }, error => {
      this.errorMessage = 'Error al modificar el estado: ' + error.message;
      console.error('Error al modificar el estado:', error);
    });
  }
}
