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
import { ListarAreasComponent } from './listar-areas/listar-areas.component';
import { AltaTipoIntegranteComponent } from './alta-tipo-integrante/alta-tipo-integrante.component';
import { ListarTipoIntegranteComponent } from './listar-tipo-integrante/listar-tipo-integrante.component';
import { ModificarTipoIntegranteComponent } from './modificar-tipo-integrante/modificar-tipo-integrante.component';


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
  { path: 'listar-areas', component: ListarAreasComponent },
  { path: 'modificar-area/:id/:nombre', component: ModificarAreaComponent },
  { path: 'alta-tipo-integrante', component: AltaTipoIntegranteComponent },
  { path: 'listar-tipo-integrante', component: ListarTipoIntegranteComponent },
  { path: 'modificar-tipo-integrante/:id', component: ModificarTipoIntegranteComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
