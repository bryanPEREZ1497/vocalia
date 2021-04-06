import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
const MaterialComponentes = [
  MatButtonModule,
MatToolbarModule,
    MatFormFieldModule, 
    MatInputModule
]

@NgModule({
  imports: [MaterialComponentes],
  exports: [MaterialComponentes]
})
export class MaterialModule { }
