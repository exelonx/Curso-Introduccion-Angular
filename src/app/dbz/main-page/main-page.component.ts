import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 25000
    },
    {
      nombre: 'Vegueta',
      poder: 8500
    }
  ];

  public agregarNuevoPersonaje(argumento: Personaje){
    this.personajes.push(argumento);
  }
}
