import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drinks } from './energy-drinks';

const BASE_URL = 'https://kenneth-server.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class EnergyDrinksService {
  model ='drinks'
  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}${this.model}`
  }

  all() {
    return this.httpClient.get(this.getUrl())
  }

  create(drink) {
    return this.httpClient.post(this.getUrl(), drink);
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  update(drink) {
    return this.httpClient.patch(this.getUrlForId(drink.id),drink)
  }

  delete(drinkId) {
    return this.httpClient.delete(this.getUrlForId(drinkId))
  }
}
