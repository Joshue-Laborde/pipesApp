import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //para usar las animaciones de fieldset
  constructor(private primeNGConfig: PrimeNGConfig){}
  ngOnInit(): void {
    this.primeNGConfig.ripple=true;
  }
}
