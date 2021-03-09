import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules we want to import will go here .....
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";


const MaterialComponents = [
  //declare the modules we imported in this array
  MatIconModule,
  MatToolbarModule,
  MatMenuModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
