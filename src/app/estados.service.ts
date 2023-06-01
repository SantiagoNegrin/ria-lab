import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {
  private apiUrl = 'http://localhost:5000/api/LlamadosEstadosPosibles'; 

  constructor(private http: HttpClient) { }

  crearEstado(estado: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json'); // Set the Content-Type header
    return this.http.post<any>(`${this.apiUrl}`, estado, { headers });
  }

  getEstados(): Observable<any> {
    const parms = {
      limit: 100,
      offset: 0,
      id: -1,
      filters: {
        activo: null,
        nombre: ''
      },
      orders: ['']
    };
    return this.http.post<any>(`${this.apiUrl}/Paged`, parms);
  }

  getEstadoById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateEstado(id: number, estado: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, estado);
  }

  eliminarEstado(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

