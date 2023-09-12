import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TituloComponent } from './pages/titulo/titulo.component'
import { TrabajoComponent } from './pages/trabajo/trabajo.component'
import { CursosComponent } from './pages/cursos/cursos.component'
import { RelacionadoComponent } from './pages/relacionado/relacionado.component'
import { OtrosComponent } from './pages/otros/otros.component'

const routes: Routes = [
  { path: 'titulos', component: TituloComponent },
  { path: 'trabajos', component: TrabajoComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'relacionado', component: RelacionadoComponent },
  { path: 'otros', component: OtrosComponent },

  { path: '', pathMatch: 'full', redirectTo: '/titulos' },
  { path: '*', pathMatch: 'full', redirectTo: '/titulos' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
