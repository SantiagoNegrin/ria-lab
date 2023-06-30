import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-postulantes-llamado',
  templateUrl: './listar-postulantes-llamado.component.html',
  styleUrls: ['./listar-postulantes-llamado.component.css']
})
export class ListarPostulantesLlamadoComponent implements OnInit {
  nombreG: string = '';
  idG: string = '';
  identificadorG: string = '';
  postulantes: any[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idG = params['idG'];
      this.nombreG = params['nombreG'];
      this.identificadorG = params['identificadorG'];
      this.fetchPostulantes();
      console.log('GET VALUES',this.nombreG,this.identificadorG,this.idG);
    });
  }

  fetchPostulantes() {
    const data = {
      limit: 1000,
      offset: 0,
      id: 0,
      filters: {
        activo: true,
        nombre: this.nombreG,
        identificador: this.identificadorG,
        personaTribunalId: 0,
        estadoId: 0
      },
      orders: ['string']
    };

    console.log('Request Body:', data);

    this.http
      .post('http://localhost:5000/api/Llamados/Paged', data)
      .subscribe(
        (response: any) => {
          console.log('Response:', response);
          this.postulantes = response.list[0].postulantes;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }
}
