import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './modules/menu/menu.component';
import { HorarioComponent } from './modules/horario/horario.component';
import { HeaderComponent } from './modules/header/header.component';
import { PrincipalComponent } from './modules/principal/principal.component';
import { FooterComponent } from './modules/footer/footer.component';
import { CheescakeComponent } from './modules/cheescake/cheescake.component';
import { MuffinsComponent } from './modules/muffins/muffins.component';
import { PastelesComponent } from './modules/pasteles/pasteles.component';
import { GalletasComponent } from './modules/galletas/galletas.component';
import { AperitivosComponent } from './modules/aperitivos/aperitivos.component';
import { BebidasComponent } from './modules/bebidas/bebidas.component';

//Importar
import { CrearSugerenciasComponent } from './modules/sugerencias/crear-sugerencias/crear-sugerencias.component';
import { ListarSugerenciasComponent } from './modules/sugerencias/listar-sugerencias/listar-sugerencias.component';
import { ActualizarSugerenciasComponent } from './modules/sugerencias/actualizar-sugerencias/actualizar-sugerencias.component';
//Importar el ReactiveFormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
//Importar todas las clases de fire
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
//Importar la configuracion de firebase que creamos en envairoments
import { environment } from 'src/environment/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    PrincipalComponent,
    AppComponent,
    MenuComponent,
    HorarioComponent,
    HeaderComponent,
    FooterComponent,
    CheescakeComponent,
    MuffinsComponent,
    PastelesComponent,
    GalletasComponent,
    AperitivosComponent,
    BebidasComponent,
    //Declarar
    CrearSugerenciasComponent,
    ActualizarSugerenciasComponent,
    ListarSugerenciasComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    //Inicializar firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
