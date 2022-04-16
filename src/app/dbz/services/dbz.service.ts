import { Injectable } from "@angular/core";

import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000,
        },
        {
          nombre: 'Vegeta',
          poder: 7500,
        }
    ];

    get personajes(): Personaje[] {
        /* 
        * El spread syntax permite a un elemento iterable tal como un arreglo o cadena ser expandido 
        * en lugares donde cero o más argumentos son esperados
        * o a un objeto ser expandido en lugares donde cero o más pares de valores clave son esperados.
        */
        return [...this._personajes];
    }
    
    constructor() {}

    agregarPersonaje( personaje: Personaje) {
        this._personajes.push( personaje );
    }
}