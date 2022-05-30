import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

import { ButtonComponent } from './button/button.component';
import { SearchInputComponent } from './search-input/search-input.component';



@NgModule({
  declarations: [
    ButtonComponent,
       SearchInputComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class ComponentsModule { }
