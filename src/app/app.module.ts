import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from "./material/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GolesTarjetasEquipodosComponent } from './goles-tarjetas/goles-tarjetas-equipodos/goles-tarjetas-equipodos.component';
import { GolesTarjetasEquipounoComponent } from './goles-tarjetas/goles-tarjetas-equipouno/goles-tarjetas-equipouno.component';
@NgModule({
  declarations: [
    AppComponent,
    GolesTarjetasEquipodosComponent,
    GolesTarjetasEquipounoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
