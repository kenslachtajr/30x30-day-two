import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@energy-drinks-workspace/material';
import { CoreDataModule } from '@energy-drinks-workspace/core-data';
import { RoutingModule } from './routing.module'
import { EnergyDrinksComponent } from './energy-drinks/energy-drinks.component';
import { EnergyDrinksListComponent } from './energy-drinks/energy-drinks-list/energy-drinks-list.component';
import { EnergyDrinksDetailsComponent } from './energy-drinks/energy-drinks-details/energy-drinks-details.component';
import { FormsModule } from '@angular/forms';
import { UiLoginModule } from '@energy-drinks-workspace/ui-login';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    FormsModule,
    UiLoginModule,
    RoutingModule
  ],
  declarations: [
    AppComponent,
    EnergyDrinksComponent,
    EnergyDrinksListComponent,
    EnergyDrinksDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
