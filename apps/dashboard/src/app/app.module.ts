import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EnergyDrinksListComponent } from './energy-drinks/energy-drinks-list/energy-drinks-list.component';
import { EnergyDrinksDetailsComponent } from './energy-drinks/energy-drinks-details/energy-drinks-details.component';

@NgModule({
  declarations: [AppComponent, EnergyDrinksListComponent, EnergyDrinksDetailsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
