import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(public http: Http) {
  }

  load(id:String){
  	return this.http.get('http://api.openweathermap.org/data/2.5/weather?id=2172797&APPID=3f510b12aa59b39aa37a1edbe57c8809')
        .map(res => res.json());
  }

  getCityByCoord(lat, lon){
  	return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric&APPID=3f510b12aa59b39aa37a1edbe57c8809')
        .map(res => res.json());
  }

}
