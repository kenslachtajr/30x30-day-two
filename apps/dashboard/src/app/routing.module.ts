import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnergyDrinksComponent } from './energy-drinks/energy-drinks.component';
import { LoginComponent } from '@energy-drinks-workspace/ui-login';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'energy-drinks', component: EnergyDrinksComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
