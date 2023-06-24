import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EstadosComponent } from './estados/estados.component';
import { NuevoEstadoComponent } from './nuevo-estado/nuevo-estado.component';
import { BuscarEstadoComponent } from './buscar-estado/buscar-estado.component';
import { EditarEstadoComponent } from './editar-estado/editar-estado.component';

import { BuscarAreasComponent } from './buscar-areas/buscar-areas.component';
import { CrearAreaComponent } from './crear-area/crear-area.component';
import { ModificarAreaComponent } from './modificar-area/modificar-area.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: 'estados', component: EstadosComponent },
  { path: 'nuevoEstado', component: NuevoEstadoComponent },
  { path: 'buscarEstado', component: BuscarEstadoComponent },
  { path: 'editarEstado/:id', component: EditarEstadoComponent },

  { path: 'buscar-area', component: BuscarAreasComponent },
  { path: 'crear-area', component: CrearAreaComponent },
  { path: 'modificar-area', component: ModificarAreaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
