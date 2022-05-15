import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  public heroes: string[] = ['Spiderman', 'Thor', 'Ironman', 'Capitan America', 'Viuda Negra']; 
  public Borrado: string = '';
  public borrandoHeroe(): void{
    this.Borrado = this.heroes.shift() || '';
  }

}
