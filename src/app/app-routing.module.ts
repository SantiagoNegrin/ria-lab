import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearAreaComponent } from './crear-area/crear-area.component';
import { ModificarAreaComponent } from './modificar-area/modificar-area.component';
import { LoginComponent } from './auth/login/login.component';
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
import { AltaPostulanteComponent } from './alta-postulante/alta-postulante.component';
import { AuthGuard } from './auth.guard';
import { AltaLlamadoComponent } from './alta-llamado/alta-llamado.component';
import { VerTribunalComponent } from './ver-tribunal/ver-tribunal.component';


const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: 'restore-password', component: RestorePasswordComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },

  { path: 'listar-llamados', component: ListarLlamadosComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN', 'COORDINADOR', 'TRIBUNAL'] } },

  { path: 'alta-llamado', component: AltaLlamadoComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },

  { path: 'listar-areas', component: ListarAreasComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  { path: 'crear-area', component: CrearAreaComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  { path: 'modificar-area/:id/:nombre', component: ModificarAreaComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },

  { path: 'listar-tipo-integrante', component: ListarTipoIntegranteComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  { path: 'alta-tipo-integrante', component: AltaTipoIntegranteComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  { path: 'modificar-tipo-integrante/:id', component: ModificarTipoIntegranteComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
 
  { path: 'listar-tipo-documento', component: ListarTipoDocumentoComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  { path: 'alta-tipo-documento', component: AltaTipoDocumentoComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  { path: 'modificar-tipo-documento/:id/:nombre',component: ModificarTipoDocumentoComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },

  { path: 'listar-responsabilidades', component: ListarResponsabilidadesComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  { path: 'alta-responsabilidades', component: AltaResponsabilidadesComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  { path: 'modificar-responsabilidades/:id', component: ModificarResponsabilidadesComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  
  { path: 'listar-posibles-estados-llamados', component: ListarEstadosPosiblesComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  { path: 'alta-estados-posibles-llamado', component: AltaEstadosPosiblesComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  { path: 'modificar-estados-posibles/:id', component: ModificarPosiblesEstadosComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
 
  { path: 'listar-usuario', component: ListarUsuarioComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  { path: 'registro', component: AltaUsuarioComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  { path: 'modificar-usuario/:id', component: ModificarUsuarioComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  { path: 'roles-usuario/:id', component: RolesUsuarioComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },

  { path: 'listar-persona', component: ListarPersonaComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  { path: 'alta-persona', component: AltaPersonaComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  { path: 'modificar-persona/:id', component: ModificarPersonaComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },

  { path: 'alta-postulante', component: AltaPostulanteComponent },

  { path: 'ver-tribunal/:id', component: VerTribunalComponent},

  { path: 'alta-miembros-tribunales', component: AltaMiembrosTribunalesComponenComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  { path: 'listar-postulantes-llamado/:idG/:nombreG/:identificadorG', component: ListarPostulantesLlamadoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
