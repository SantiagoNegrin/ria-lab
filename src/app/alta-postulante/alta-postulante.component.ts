import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alta-postulante',
  templateUrl: './alta-postulante.component.html',
  styleUrls: ['./alta-postulante.component.css']
})
export class AltaPostulanteComponent implements OnInit {
  personas: any[] = [];
  llamados: any[] = [];
  personaId: number = 0;
  idG: number = 0;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.fetchPersonas();
    this.route.params.subscribe(params => {
      this.idG = params['idG'];
    });
  }

  fetchPersonas() {
    const data = {
      limit: 10000,
      offset: 0,
      id: 0,
      filters: {
        activo: true,
        nombre: '' // Reemplaza 'string' con el valor de filtro deseado
      },
      orders: ['string']
    };

    this.http.post('http://localhost:5000/api/Personas/Paged', data)
      .subscribe((response: any) => {
        this.personas = response.list; // Asignar la lista de personas a la variable del componente
      });
  }

  altaPostulante() {
    const data = {
      id: 0,
      activo: true,
      fechaHoraEntrevista: '2023-06-30T22:43:37.414Z', // Reemplaza con la fecha y hora deseada
      estudioMeritosRealizado: true,
      entrevistaRealizada: true,
      llamadoId: this.idG, // Reemplaza con el valor deseado
      personaId: this.personaId, // Reemplaza con el valor deseado

    };

    console.log('Request Bodyyyyy:', data);

    this.http.post('http://localhost:5000/api/Postulantes', data)
      .subscribe((response: any) => {
        // Procesar la respuesta del alta del postulante
        console.log('Response:', response);
      });
  }
}
