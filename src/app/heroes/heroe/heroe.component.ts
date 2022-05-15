import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    public nombre: string = 'Ironman';
    public edad: number = 22;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    public obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }

    public cambiarNombre(nombre: string): void{
        this.nombre = nombre;
    }

    public cambiarEdad(edad: number): void{
        this.edad = edad;
    }
}