import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { CityComponent } from './city/city.component';
import { HubComponent } from './hub/hub.component';

const routes: Routes = [
  {
    path: 'dice',
    component: DiceRollerComponent,
  },
  {
    path: 'character',
    component: CharacterSheetComponent,
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
