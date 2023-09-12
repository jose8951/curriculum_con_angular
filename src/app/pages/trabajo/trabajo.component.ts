import { Component } from '@angular/core';
import datos from 'src/assets/json/db.json';


@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.css']
})
export class TrabajoComponent {
 

  mostrar_trabajo: any = datos.trabajos;


}
