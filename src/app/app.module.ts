import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GolesTarjetasEquipodosComponent } from './goles-tarjetas/goles-tarjetas-equipodos/goles-tarjetas-equipodos.component';
import { GolesTarjetasEquipounoComponent } from './goles-tarjetas/goles-tarjetas-equipouno/goles-tarjetas-equipouno.component';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { PartidoComponent } from './partido/partido.component';

@NgModule({
  declarations: [
    AppComponent,
    GolesTarjetasEquipodosComponent,
    GolesTarjetasEquipounoComponent,
    PartidoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
