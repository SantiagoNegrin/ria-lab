import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-alta-llamado',
  templateUrl: './alta-llamado.component.html',
  styleUrls: ['./alta-llamado.component.css']
})
export class AltaLlamadoComponent {
  areas: any[] = [];
  selectedArea: any;
  identificador: string ='';
  nombre: string ='';
  linkPlanillaPuntajes: string ='';
  linkActa: string ='';
  minutosEntrevista: number =0;
  areaS: any;
  areaID: number = 0; // Cambio de areaId a areaID
  successMessage: string = '';
  errorMessage: string = '';
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerAreas();
  }

  obtenerAreas() {
    const url = 'http://localhost:5000/api/Areas/Paged';
    
    const data = {
      limit: 1000,
      offset: 0,
      id: 0,
      filters: {
        activo: true,
        nombre: ''
      },
      orders: ['string']
    };

    const headers = new HttpHeaders()
      .set('Accept', 'text/plain')
      .set('Content-Type', 'application/json');

    this.http.post(url, data, { headers: headers })
      .subscribe(
        (response: any) => {
          console.log('Respuesta:', response);
          this.areas = response.list;
        },
        error => {
          console.error('Error:', error);
        }
      );
  }

  crearLlamado() {
    const url = 'http://localhost:5000/api/Llamados';
    const selectedArea = this.areas.find(area => area.id === this.areaID);
    const data = {
      activo: true,
      identificador: this.identificador,
      nombre: this.nombre,
      linkPlanillaPuntajes: this.linkPlanillaPuntajes,
      linkActa: this.linkActa,
      minutosEntrevista: this.minutosEntrevista,
      areaID: this.areaID,
      area: selectedArea,
    };
    console.log('Respuesta:', data);
    const headers = new HttpHeaders()
      .set('Accept', 'text/plain')
      .set('Content-Type', 'application/json');
  
    this.http.post(url, data)
      .subscribe(
        (response: any) => {
          console.log('Respuesta:', response);
          this.successMessage = 'Llamado posible creado exitosamente.';
          this.errorMessage = '';
          console.log('Estado posible creado exitosamente.');
        },
        error => {
          console.error('Error:', error);
          this.successMessage = '';
          this.errorMessage = 'Error al crear el estado posible: ' + error.message;
          // Manejar el error aquí
        }
      );
  }
  
}
