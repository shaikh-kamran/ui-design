import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { ButtonsComponent } from './buttons.component';
import { FlatButtonComponent } from './flat-button/flat-button.component';


@NgModule({
  declarations: [ButtonsComponent, FlatButtonComponent],
  imports: [
    CommonModule,
    ButtonsRoutingModule
  ]
})
export class ButtonsModule { }
