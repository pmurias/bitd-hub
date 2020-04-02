import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import { CharacterSheetsComponent } from './character-sheets/character-sheets.component';
import { CityComponent } from './city/city.component';
import { HubComponent } from './hub/hub.component';

const routes: Routes = [
  {
    path: 'dice',
    component: DiceRollerComponent,
  },
  {
    path: 'character',
    component: CharacterSheetsComponent,
  },
  {
    path: 'city',
    component: CityComponent,
  },
  {
    path: '',
    component: HubComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
