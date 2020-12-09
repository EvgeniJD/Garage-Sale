import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatIconModule
];

@NgModule({
  imports: [
    material
  ],
  exports: [
    material
  ]
})
export class MaterialModule { }
