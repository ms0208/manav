import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M1Component } from './m1/m1.component';



@NgModule({
  declarations: [
    M1Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    M1Component
  ]
})
export class ManavModuleModule { }
