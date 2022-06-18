import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  nuevo: Personaje = {
    nombre: '',
    poder : 0
  }

  constructor(private dbzService: DbzService) {}

  // @Output()
  // OnNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  public agregar(): void{

    if( this.nuevo.nombre.trim().length === 0 ){ return; }

    // this.OnNewCharacter.emit( this.nuevo );
    this.dbzService.agregarPersonaje( this.nuevo )

    this.nuevo = { nombre: '', poder: 0 }

  }
}
