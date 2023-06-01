import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadosComponent } from './estados/estados.component';
import { NuevoEstadoComponent } from './nuevo-estado/nuevo-estado.component';
import { BuscarEstadoComponent } from './buscar-estado/buscar-estado.component';
import { EditarEstadoComponent } from './editar-estado/editar-estado.component';

const routes: Routes = [
  { path: 'estados', component: EstadosComponent },
  { path: 'nuevoEstado', component: NuevoEstadoComponent },
  { path: 'buscarEstado', component: BuscarEstadoComponent },
  { path: 'editarEstado/:id', component: EditarEstadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
