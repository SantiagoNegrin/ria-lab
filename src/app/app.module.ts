import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarAreasComponent } from './buscar-areas/buscar-areas.component';
import { HttpClientModule } from '@angular/common/http';
import { CrearAreaComponent } from './crear-area/crear-area.component';
import { ModificarAreaComponent } from './modificar-area/modificar-area.component';


@NgModule({
  declarations: [
    AppComponent,
    BuscarAreasComponent,
    CrearAreaComponent,
    ModificarAreaComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class BuscarAreasModule { }
