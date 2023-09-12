import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './pages/titulo/titulo.component';
import { TrabajoComponent } from './pages/trabajo/trabajo.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { RelacionadoComponent } from './pages/relacionado/relacionado.component';
import { OtrosComponent } from './pages/otros/otros.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DatosComponent } from './pages/datos/datos.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    TrabajoComponent,
    CursosComponent,
    RelacionadoComponent,
    OtrosComponent,
    NavbarComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
