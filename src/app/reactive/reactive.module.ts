import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { ReactiveBasicsComponent } from './basics/reactive-basics.component';
import { ReactiveDynamicsComponent } from './dynamics/reactive-dynamics.component';
import { ReactiveSwitchesComponent } from './switches/reactive-switches.component';

@NgModule({
  declarations: [
    ReactiveBasicsComponent,
    ReactiveDynamicsComponent,
    ReactiveSwitchesComponent,
  ],
  imports: [CommonModule, ReactiveRoutingModule],
})
export class ReactiveModule {}
