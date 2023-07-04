import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-tribunal',
  templateUrl: './ver-tribunal.component.html',
  styleUrls: ['./ver-tribunal.component.css']
})
export class VerTribunalComponent {

  puestos: string[] = [];
  tipos: any[] = [];
  miembrosTribunal: any[] = [];
  users: any[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getMiembros(id);
    });
  }

  getUser(puesto: string, tipo: string): any[] {
    return this.users.filter(user => user.puesto === puesto && user.tipo === tipo);
  }

  getMiembros( id: number){
    const url = `http://localhost:5000/api/Llamados/${id}`;
    this.http.get<any>(url).subscribe(response => {
      if (response && response.id) { 
        this.miembrosTribunal = response.miembrosTribunal;
        this.miembrosTribunal.forEach(u => {
          let user = {
            persona: u.persona,
            puesto: u.orden,
            tipo: u.tipoDeIntegrante /*.nombre,
            tipoOrden: u.tipoDeIntegrante.orden*/
          }
          this.users.push(user);
        });

        this.puestos = Array.from(new Set(this.users.map(user => user.puesto)));
        this.tipos = Array.from(new Set(this.users.map(user => user.tipo)));
        this.tipos.sort((a, b) => a.orden - b.orden);
    
      } else {
        console.error('No se encontro el llamado');
      }
    }, error => {
      console.error('Error al obtener los miembros del tribunal:', error);
    });
  }

}
