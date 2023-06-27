import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EstadosComponent } from './estados/estados.component';
import { NuevoEstadoComponent } from './nuevo-estado/nuevo-estado.component';
import { BuscarEstadoComponent } from './buscar-estado/buscar-estado.component';
import { EditarEstadoComponent } from './editar-estado/editar-estado.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarAreasComponent } from './buscar-areas/buscar-areas.component';
import { CrearAreaComponent } from './crear-area/crear-area.component';
import { ModificarAreaComponent } from './modificar-area/modificar-area.component';
import { AuthService } from './auth/login/auth.service';
import { FormsModule  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ListarAreasComponent } from './listar-areas/listar-areas.component';
import { AltaTipoIntegranteComponent } from './alta-tipo-integrante/alta-tipo-integrante.component';
import { ListarTipoIntegranteComponent } from './listar-tipo-integrante/listar-tipo-integrante.component';
import { ModificarTipoIntegranteComponent } from './modificar-tipo-integrante/modificar-tipo-integrante.component';
import { TokenInterceptor } from './auth/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EstadosComponent,
    NuevoEstadoComponent,
    BuscarEstadoComponent,
    EditarEstadoComponent,
    BuscarAreasComponent,
    CrearAreaComponent,
    ModificarAreaComponent,
    LoginComponent,
    LogoutComponent,
    ListarAreasComponent,
    AltaTipoIntegranteComponent,
    ListarTipoIntegranteComponent,
    ModificarTipoIntegranteComponent,
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
    AuthService,TokenInterceptor,
    {provide: HTTP_INTERCEPTORS,
       useClass: TokenInterceptor, 
       multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
