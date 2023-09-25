import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from '../../../environment/environment';

@Injectable()
export class WeatherService {

  private url = 'https://api.api-ninjas.com/v1/weather?city=Belgrade';

  private headers = new HttpHeaders();

  constructor(private httpClient: HttpClient) {
    this.headers = this.headers.set('X-Api-Key', environment.apiKey);
  }

  getWeather(): Observable<WeatherResult> {
    return this.httpClient.get<WeatherDto>(this.url, {headers: this.headers})
      .pipe(
        map((el: WeatherDto) => {
          return {
            maxTemp: el.max_temp,
            minTemp: el.min_temp
          }
        })
      )
  }
}

interface WeatherDto {
  min_temp: number;
  max_temp: number;
}

export interface WeatherResult {
  maxTemp: number;
  minTemp: number;
}
