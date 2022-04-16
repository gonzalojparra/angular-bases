import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})

export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  }

  /*
  * Output: emite eventos
  * Siempre especificar el tipo de dato que se tiene que enviar
  * Se envía <Personaje>
  */
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if ( this.nuevo.nombre.trim().length === 0 ){ return; }

    console.log( this.nuevo );
    this.onNuevoPersonaje.emit( this.nuevo );
    
    this.nuevo = {
      nombre: '',
      poder: 0,
    }

  }
}
