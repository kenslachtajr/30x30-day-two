import { Component, OnInit } from '@angular/core';
import { Drinks, EnergyDrinksService } from '@energy-drinks-workspace/core-data';

@Component({
  selector: 'energy-drinks-workspace-energy-drinks',
  templateUrl: './energy-drinks.component.html',
  styleUrls: ['./energy-drinks.component.scss']
})
export class EnergyDrinksComponent implements OnInit {
  drinks$;
  selectedDrink: Drinks;

  constructor(private energyDrinksService: EnergyDrinksService) { }

  resetDrink() {
    const emptyDrink: Drinks = {
      id: null,
      type: '',
      name: '',
      fizzLevel: null
    }
    this.selectDrink(emptyDrink);
  }

  ngOnInit() {
    this.getDrinks();
    this.resetDrink();
  }

  selectDrink(drink) {
    this.selectedDrink = drink;
  }

  getDrinks() {
    this.drinks$ = this.energyDrinksService.all();
  }

  saveDrink(drink) {
    if (!drink.id) {
      this.createDrink(drink);
    } else {
      this.updateDrink(drink);
    }
  }

  updateDrink(drink) {
    this.energyDrinksService.update(drink)
    .subscribe(result => {
      this.getDrinks();
      this.resetDrink();
    });
  }

  createDrink(drink) {
    this.energyDrinksService.create(drink)
    .subscribe(result => {
      this.getDrinks();
      this.resetDrink();
    });
  }

  deleteDrink(drink) {
    this.energyDrinksService.delete(drink.id)
    .subscribe(result => this.getDrinks());
  }

  cancel() {
    this.resetDrink();
  }
}
