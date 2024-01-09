import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{
  nombreLower: string="joshUE";
  nombreUpper:string="joshue";
  nombreCompleto:string="joshue laborde"

  fecha: Date=new Date();


}
