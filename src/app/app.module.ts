// Importaciones de Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importaciones de terceros
import { AppComponent } from './app.component';

// Cuando querramos trabajar en éste módulo lo vamos a trabajar directamente en ese módulo y no en 'app.module.ts'
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';


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
    DbzModule,
  ],
  // Servicios específicos a un módulo
  providers: [], 
  // Componente principal
  bootstrap: [AppComponent] 
})
export class AppModule { }
