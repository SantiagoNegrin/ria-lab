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
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.fetchPersonas();
  }

  fetchPersonas() {
    const data = {
      limit: 10000,
      offset: 0,
      id: 0,
      filters: {
        activo: true,
        nombre: '' 
      },
      orders: ['string']
    };

    this.http.post('http://localhost:5000/api/Personas/Paged', data)
      .subscribe((response: any) => {
        this.personas = response.list;
      });
  }

  altaPostulante() {
    const data = {
      id: 0,
      activo: true,
      fechaHoraEntrevista: null, 
      estudioMeritosRealizado: false,
      entrevistaRealizada: false,
      llamadoId: this.idG,
      personaId: this.personaId, 

    };
    console.log(data);
    this.http.post('http://localhost:5000/api/Postulantes', data)
      .subscribe((response: any) => {
        this.successMessage = "Postulante agregado con exto.";
        this.errorMessage = '';
        location.reload();
      }, error => {
        this.errorMessage = "Ocurrió un error al agregar el postulante.";
        console.log(error);
      });
  }
}
