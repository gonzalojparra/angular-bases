import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent,
    ],
    // exports: las cosas que quiero hacer públicas o visibles fuera de este módulo
    exports: [
        ListadoComponent,
    ],
    // imports: acá van SOLO módulos
    imports: [
        CommonModule // ofrece directivas como el ngIf y ngFor
    ]
})

export class HeroesModule {

}