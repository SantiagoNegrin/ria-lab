import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarAreasComponent } from './buscar-areas/buscar-areas.component';
import { CrearAreaComponent } from './crear-area/crear-area.component';
import { ModificarAreaComponent } from './modificar-area/modificar-area.component';

const routes: Routes = [
  { path: 'buscar-area', component: BuscarAreasComponent },
  { path: 'crear-area', component: CrearAreaComponent },
  { path: 'modificar-area', component: ModificarAreaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
