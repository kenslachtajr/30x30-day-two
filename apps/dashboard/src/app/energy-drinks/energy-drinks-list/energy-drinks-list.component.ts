import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Drinks } from '@energy-drinks-workspace/core-data';

@Component({
  selector: 'energy-drinks-workspace-energy-drinks-list',
  templateUrl: './energy-drinks-list.component.html',
  styleUrls: ['./energy-drinks-list.component.scss']
})
export class EnergyDrinksListComponent {
  @Input() drinks: Drinks[]
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
