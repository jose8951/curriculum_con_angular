import { Component, OnInit } from '@angular/core';
import datos from 'src/assets/json/db.json';
@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {


  mostrar_titulos:any=datos.titulos;

  ngOnInit(): void {
      
    
  }



  
}
