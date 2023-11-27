import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { HorarioComponent } from './modules/horario/horario.component';
import { MenuComponent } from './modules/menu/menu.component';
import { HeaderComponent } from './modules/header/header.component';
import { PrincipalComponent } from './modules/principal/principal.component';
import { FooterComponent } from './modules/footer/footer.component';
import { CheescakeComponent } from './modules/cheescake/cheescake.component';
import { MuffinsComponent } from './modules/muffins/muffins.component';
import { PastelesComponent } from './modules/pasteles/pasteles.component';
import { GalletasComponent } from './modules/galletas/galletas.component';
import { AperitivosComponent } from './modules/aperitivos/aperitivos.component';
import { BebidasComponent } from './modules/bebidas/bebidas.component';
//Importar los componentes de la sugerencia
import { CrearSugerenciasComponent } from './modules/sugerencias/crear-sugerencias/crear-sugerencias.component';
import { ActualizarSugerenciasComponent } from './modules/sugerencias/actualizar-sugerencias/actualizar-sugerencias.component';
import { ListarSugerenciasComponent } from './modules/sugerencias/listar-sugerencias/listar-sugerencias.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'}, //sirve definir el principal
  {path: "horarios", component: HorarioComponent},
  {path: 'home', component:PrincipalComponent},
  {path: 'final', component: FooterComponent},
  {path: 'cheescake', component: CheescakeComponent},
  {path: 'muffins', component: MuffinsComponent},
  {path: 'pasteles', component: PastelesComponent},
  {path: 'galletas', component: GalletasComponent},
  {path: 'aperitivos', component: AperitivosComponent},
  {path: 'bebidas', component: BebidasComponent},
  //Agregar los componentes
  {path:'crearSu', component:CrearSugerenciasComponent},
  {path:'actualizarSu/:id', component: ActualizarSugerenciasComponent},
  {path:'listarSu', component: ListarSugerenciasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
