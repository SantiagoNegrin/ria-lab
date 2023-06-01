import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class BuscarAreasModule { }
