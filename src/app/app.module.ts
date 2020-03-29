import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DieFacePipe } from './die-face.pipe';

import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { ClockComponent } from './clock/clock.component';
import { CityComponent } from './city/city.component';


@NgModule({
  declarations: [
    AppComponent,
    DiceRollerComponent,
    DieFacePipe,
    CharacterSheetComponent,
    CheckboxesComponent,
    ClockComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
