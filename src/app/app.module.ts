import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Cuando querramos trabajar en éste módulo lo vamos a trabajar directamente en ese módulo y no en 'app.module.ts'
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';


@NgModule({
  // Componentes
  declarations: [ 
    AppComponent,
  ],
  // Otros módulos
  imports: [ 
    BrowserModule,
    HeroesModule,
    ContadorModule,
  ],
  // Servicios específicos a un módulo
  providers: [], 
  // Componente principal
  bootstrap: [AppComponent] 
})
export class AppModule { }
