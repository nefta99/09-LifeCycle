import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Pagina1Component } from './pages/pagina1/pagina1.component';
import { MuestraNombreComponent } from './components/muestra-nombre/muestra-nombre.component';


@NgModule({
  declarations: [
    AppComponent,
    Pagina1Component,
    MuestraNombreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //Son furmularios por templete
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
