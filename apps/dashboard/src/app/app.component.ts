import { Component } from '@angular/core';

@Component({
  selector: 'energy-drinks-workspace',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Energy Drinks';

  links = [
    { path: '/energy-drinks', icon: 'work', title: 'Energy Drinks' },
  ]
}
