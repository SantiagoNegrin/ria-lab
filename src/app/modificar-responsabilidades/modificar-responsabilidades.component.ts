import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modificar-responsabilidades',
  templateUrl: './modificar-responsabilidades.component.html',
  styleUrls: ['./modificar-responsabilidades.component.css']
})
export class ModificarResponsabilidadesComponent implements OnInit {
  responsabilidadId?: number;
  responsabilidad: any = {};
  areas: any[] = [];
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    //this.route.params.subscribe(params => {
      //this.responsabilidadId = params['id'];
      this.obtenerResponsabilidad();
      this.obtenerAreas();
    //});
  }

  obtenerResponsabilidad() {
    const apiUrl = `http://localhost:5000/api/Responsabilidades/${this.responsabilidadId}`;
    this.http.get<any>(apiUrl).subscribe(response => {
      this.responsabilidad = response;
    });
  }

  obtenerAreas() {
    const apiUrl = 'http://localhost:5000/api/Areas/Paged';
    const body = {
      limit: 10000,
      offset: 0,
      id: 0,
      filters: {
        activo: true,
        nombre: ''
      },
      orders: ['']
    };

    this.http.post<any>(apiUrl, body).subscribe(response => {
      this.areas = response.list;
    });
  }

  guardarResponsabilidad() {
    const apiUrl = `http://localhost:5000/api/Responsabilidades/${this.responsabilidadId}`;
    this.http.put<any>(apiUrl, this.responsabilidad).subscribe(response => {
      console.log('Responsabilidad modificada:', response);
      location.reload();      
    }, (error) => {
      this.errorMessage = 'Ocurrió un error al guardar los cambios. Por favor, inténtalo de nuevo.'
    });
  }
}
