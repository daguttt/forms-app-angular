import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { ReactiveBasicsComponent } from './basics/reactive-basics.component';
import { ReactiveDynamicsComponent } from './dynamics/reactive-dynamics.component';
import { ReactiveSwitchesComponent } from './switches/reactive-switches.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReactiveBasicsComponent,
    ReactiveDynamicsComponent,
    ReactiveSwitchesComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, ReactiveRoutingModule],
})
export class ReactiveModule {}
