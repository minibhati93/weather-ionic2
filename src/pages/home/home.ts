import { Component } from '@angular/core';

import { Geolocation } from 'ionic-native';

import { WeatherService } from '../../providers/weather-service';

@Component({
  templateUrl: 'home.html'
})

export class HomePage {
	private weatherData : any = {}; 
	constructor(public weatherService: WeatherService) {
	Geolocation.getCurrentPosition().then(pos => {
		// console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
	});

	let watch = Geolocation.watchPosition().subscribe(pos => {
		// console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
		this.weatherService.getCityByCoord(pos.coords.latitude, pos.coords.longitude).subscribe(data => {
			// console.log(JSON.stringify(data));
			this.weatherData.country = data.sys.country;
			// console.log(country);
			this.weatherData.place = data.name;
			this.weatherData.sunrise = new Date(data.sys.sunrise).toLocaleTimeString();
			this.weatherData.sunset = new Date(data.sys.sunset).toLocaleTimeString();
			this.weatherData.temp = data.main.temp;
			this.weatherData.tempmin = data.main.temp_min;
			this.weatherData.tempmax = data.main.temp_max;
			this.weatherData.tempmax = data.main.temp_max;
			this.weatherData.main = data.weather[0].main;
			this.weatherData.desc = data.weather[0].description;
		},
		error => {

		});
	});


	}
}