import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicsComponent } from './basics/basics.component';
import { DynamicsComponent } from './dynamics/dynamics.component';
import { SwitchesComponent } from './switches/switches.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BasicsComponent, DynamicsComponent, SwitchesComponent],
  imports: [CommonModule, FormsModule, TemplateRoutingModule],
})
export class TemplateModule {}
