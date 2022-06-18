import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  nuevo: Personaje = {
    nombre: '',
    poder : 0
  }

  @Output()
  OnNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  public agregar(): void{

    if( this.nuevo.nombre.trim().length === 0 ){ return; }

    this.OnNewCharacter.emit( this.nuevo );

    this.nuevo = { nombre: '', poder: 0 }

  }
}
