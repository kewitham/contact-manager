import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout'

import { NewModRoutingModule } from './new-mod-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { MaterialModule } from '../shared/material.module'
import { FormsModule } from '@angular/forms';
import { FlexboxComponent } from './flexbox/flexbox.component';


@NgModule({
  declarations: [ButtonsComponent, FlexboxComponent],
  imports: [
    CommonModule,
    NewModRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class NewModModule { }
