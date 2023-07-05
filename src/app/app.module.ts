import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearAreaComponent } from './crear-area/crear-area.component';
import { ModificarAreaComponent } from './modificar-area/modificar-area.component';
import { AuthService } from './auth/login/auth.service';
import { FormsModule  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { ListarAreasComponent } from './listar-areas/listar-areas.component';
import { AltaTipoIntegranteComponent } from './alta-tipo-integrante/alta-tipo-integrante.component';
import { ListarTipoIntegranteComponent } from './listar-tipo-integrante/listar-tipo-integrante.component';
import { ModificarTipoIntegranteComponent } from './modificar-tipo-integrante/modificar-tipo-integrante.component';
import { TokenInterceptor } from './auth/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { AltaUsuarioComponent } from './alta-usuario/alta-usuario.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { AltaLlamadoComponent } from './alta-llamado/alta-llamado.component';
import { AltaMiembrosTribunalesComponenComponent } from './alta-miembros-tribunales-componen/alta-miembros-tribunales-componen.component';
import { RestorePasswordComponent } from './restore-password/restore-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ListarLlamadosComponent } from './listar-llamados/listar-llamados.component';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';
import { RolesUsuarioComponent } from './roles-usuario/roles-usuario.component';
import { ListarPostulantesLlamadoComponent } from './listar-postulantes-llamado/listar-postulantes-llamado.component';
import { AltaPostulanteComponent } from './alta-postulante/alta-postulante.component';
import { AuthGuard } from './auth.guard';
import { VerTribunalComponent } from './ver-tribunal/ver-tribunal.component';
import { ModificarEstadoComponent } from './modificar-estado/modificar-estado.component';
import { AgregarEstadoLlamadoComponent } from './agregar-estado-llamado/agregar-estado-llamado.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearAreaComponent,
    ModificarAreaComponent,
    LoginComponent,
    ListarAreasComponent,
    AltaTipoIntegranteComponent,
    ListarTipoIntegranteComponent,
    ModificarTipoIntegranteComponent,
    AltaTipoDocumentoComponent,
    ListarTipoDocumentoComponent,
    ModificarTipoDocumentoComponent,
    AltaResponsabilidadesComponent,
    ListarResponsabilidadesComponent,
    ModificarResponsabilidadesComponent,
    AltaPersonaComponent,
    ListarPersonaComponent,
    ModificarPersonaComponent,
    AltaEstadosPosiblesComponent,
    ListarEstadosPosiblesComponent,
    ModificarPosiblesEstadosComponent,
    AltaMiembrosTribunalesComponenComponent,
    AltaLlamadoComponent,
    ListarUsuarioComponent,
    AltaUsuarioComponent,
    RestorePasswordComponent,
    ForgotPasswordComponent,
    ListarLlamadosComponent,
    ModificarUsuarioComponent,
    RolesUsuarioComponent,
    ListarPostulantesLlamadoComponent,
    AltaPostulanteComponent,
    AgregarEstadoLlamadoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule ,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    TokenInterceptor,
    {provide: HTTP_INTERCEPTORS,
       useClass: TokenInterceptor, 
       multi: true },
    AuthGuard  
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
