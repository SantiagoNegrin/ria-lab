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
import { AltaTipoDocumentoComponent } from './alta-tipo-documento/alta-tipo-documento.component';
import { ListarTipoDocumentoComponent } from './listar-tipo-documento/listar-tipo-documento.component';
import { ModificarTipoDocumentoComponent } from './modificar-tipo-documento/modificar-tipo-documento.component';
import { AltaResponsabilidadesComponent } from './alta-responsabilidades/alta-responsabilidades.component';
import { ListarResponsabilidadesComponent } from './listar-responsabilidades/listar-responsabilidades.component';
import { ModificarResponsabilidadesComponent } from './modificar-responsabilidades/modificar-responsabilidades.component';
import { AltaPostulantesComponent } from './alta-postulantes/alta-postulantes.component';
import { AltaPersonaComponent } from './alta-persona/alta-persona.component';
import { ListarPersonaComponent } from './listar-persona/listar-persona.component';
import { ModificarPersonaComponent } from './modificar-persona/modificar-persona.component';
import { AltaEstadosPosiblesComponent } from './alta-estados-posibles/alta-estados-posibles.component';
import { ListarEstadosPosiblesComponent } from './listar-estados-posibles/listar-estados-posibles.component';
import { ModificarPosiblesEstadosComponent } from './modificar-posibles-estados/modificar-posibles-estados.component';
import { AltaMiembrosTribunalesComponenComponent } from './alta-miembros-tribunales-componen/alta-miembros-tribunales-componen.component';
import { AltaUsuarioComponent } from './alta-usuario/alta-usuario.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { RestorePasswordComponent } from './restore-password/restore-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ListarLlamadosComponent } from './listar-llamados/listar-llamados.component';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';
import { RolesUsuarioComponent } from './roles-usuario/roles-usuario.component';
import { ListarPostulantesLlamadoComponent } from './listar-postulantes-llamado/listar-postulantes-llamado.component';



const routes: Routes = [
  { path: 'estados', component: EstadosComponent },
  { path: 'nuevoEstado', component: NuevoEstadoComponent },
  { path: 'buscarEstado', component: BuscarEstadoComponent },
  { path: 'editarEstado/:id', component: EditarEstadoComponent },
  { path: 'alta-tipo-documento', component: AltaTipoDocumentoComponent },
  { path: 'buscar-area', component: BuscarAreasComponent },
  { path: 'crear-area', component: CrearAreaComponent },
  { path: 'modificar-area', component: ModificarAreaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'listar-areas', component: ListarAreasComponent },
  { path: 'modificar-area/:id/:nombre', component: ModificarAreaComponent },
  { path: 'alta-tipo-integrante', component: AltaTipoIntegranteComponent },
  { path: 'listar-tipo-integrante', component: ListarTipoIntegranteComponent },
  { path: 'modificar-tipo-integrante/:id', component: ModificarTipoIntegranteComponent },
  { path: 'listar-tipo-documento', component: ListarTipoDocumentoComponent },
  { path: 'modificar-tipo-documento/:id/:nombre',component: ModificarTipoDocumentoComponent},
  { path: 'alta-responsabilidades', component: AltaResponsabilidadesComponent },
  { path: 'listar-responsabilidades', component: ListarResponsabilidadesComponent },
  { path: 'modificar-responsabilidades/:id', component: ModificarResponsabilidadesComponent },
  { path: 'alta-postulante', component: AltaPostulantesComponent },
  { path: 'alta-persona', component: AltaPersonaComponent },
  { path: 'listar-persona', component: ListarPersonaComponent },
  { path: 'modificar-persona/:id', component: ModificarPersonaComponent },
  { path: 'alta-estados-posibles-llamado', component: AltaEstadosPosiblesComponent },
  { path: 'listar-posibles-estados-llamados', component: ListarEstadosPosiblesComponent },
  { path: 'modificar-estados-posibles/:id', component: ModificarPosiblesEstadosComponent },
  { path: 'registro', component: AltaUsuarioComponent },
  { path: 'listar-usuario', component: ListarUsuarioComponent },
  { path: 'alta-miembros-tribunales', component: AltaMiembrosTribunalesComponenComponent },
  { path: 'restore-password', component: RestorePasswordComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'listar-llamados', component: ListarLlamadosComponent },
  { path: 'modificar-usuario/:id', component: ModificarUsuarioComponent },
  { path: 'roles-usuario/:id', component: RolesUsuarioComponent },
  { path: 'listar-postulantes-llamado/:idG/:nombreG/:identificadorG', component: ListarPostulantesLlamadoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
