import { Component } from '@angular/core';
import datos from 'src/assets/json/db.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curriculum';

  Personajes:any=datos.heroes;
}
