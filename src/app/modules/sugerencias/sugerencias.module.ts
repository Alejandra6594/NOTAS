import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Importar los componentes
import { CrearSugerenciasComponent } from './crear-sugerencias/crear-sugerencias.component';
import { ActualizarSugerenciasComponent } from './actualizar-sugerencias/actualizar-sugerencias.component';
import { ListarSugerenciasComponent } from './listar-sugerencias/listar-sugerencias.component';
@NgModule({
  declarations: [
    //Declarar los componentes
    //CrearSugerenciasComponent,
    //ActualizarSugerenciasComponent,
    //ListarSugerenciasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SugerenciasModule { }
