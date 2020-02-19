import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Drinks } from '@energy-drinks-workspace/core-data';

@Component({
  selector: 'energy-drinks-workspace-energy-drinks-details',
  templateUrl: './energy-drinks-details.component.html',
  styleUrls: ['./energy-drinks-details.component.scss']
})
export class EnergyDrinksDetailsComponent {
  currentDrink: Drinks;
  originalName;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set drink(value) {
    if (value) this.originalName = value.name;
    this.currentDrink = Object.assign({}, value)
  }
}
