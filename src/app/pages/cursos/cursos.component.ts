import { Component } from '@angular/core';
import datos from "src/assets/json/db.json"

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  mostrar_cursos : any = datos.cursos
}
