import {Component} from "@angular/core";
import {WeatherResult, WeatherService} from "./nav-weather.service";
import {Observable} from "rxjs";

@Component({
  selector: 'nav-weather',
  template: `
    <div class="weather-container">
      <div *ngIf="currentWeather | async as weather else loading" class="weather-temperature">
        <div>Max temp: {{weather.maxTemp}}</div>
        <div>Min temp: {{weather.minTemp}}</div>
      </div>
      <ng-template #loading class="weather-temperature">
        <div class="loader">Loading...</div>
      </ng-template>

      <button (click)="getWeather()" class="weather-button">Update</button>
    </div>
  `,
  styleUrls: ['./nav-weather.component.css']
})
export class ToolbarWeatherComponent {

  protected currentWeather: Observable<WeatherResult>;

  constructor(private weatherService: WeatherService) {
    this.getWeather()
  }

  getWeather() {
    this.currentWeather = this.weatherService.getWeather().pipe()
  }
}
