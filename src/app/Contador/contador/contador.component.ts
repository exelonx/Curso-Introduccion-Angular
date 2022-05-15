import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template: `
        <h1>{{titulo}}</h1>
        <h3>La base es: <strong>{{base}}</strong></h3>

        <button (click)="acumular(base)"> + {{base}} </button>
        <span> {{contador}} </span>
        <button (click)="acumular(-base)"> - {{base}} </button>
    `
})
export class ContadorComponent{
    public titulo: string = 'Contador App';
    public contador: number = 0;
    public base: number = 5;
    public acumular(valor: number):void{
      this.contador+=valor;
    }
}