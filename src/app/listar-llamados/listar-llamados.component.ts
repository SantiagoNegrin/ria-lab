import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-llamados',
  templateUrl: './listar-llamados.component.html',
  styleUrls: ['./listar-llamados.component.css']
})
export class ListarLlamadosComponent implements OnInit {
  llamados: any[]= [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getListarLlamados();
  }

  getListarLlamados() {
    const url = 'http://localhost:5000/api/Llamados/Paged';
    const body = {
      limit: 100,
      offset: 0,
      id: 0,
      filters: {
        activo: true,
        nombre: '',
        identificador: '',
        personaTribunalId: 0,
        estadoId: 0
      },
      orders: [
        'string'
      ]
    };
  
    this.http.post<any>(url, body)
      .subscribe(response => {
        console.log(response); // Agrega esta línea para mostrar la respuesta en la consola
        this.llamados = response.list;
      });
  }
  
}
