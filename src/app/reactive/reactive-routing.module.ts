import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveBasicsComponent } from './basics/reactive-basics.component';
import { ReactiveDynamicsComponent } from './dynamics/reactive-dynamics.component';
import { ReactiveSwitchesComponent } from './switches/reactive-switches.component';

const routes: Routes = [
  { path: 'basics', component: ReactiveBasicsComponent },
  { path: 'dynamics', component: ReactiveDynamicsComponent },
  { path: 'switches', component: ReactiveSwitchesComponent },
  { path: '**', redirectTo: 'basics' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ReactiveRoutingModule {}
