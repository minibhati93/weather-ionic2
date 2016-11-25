import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { WeatherService } from '../../providers/weather-service';

@Component({
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  places: Array<{title: string, note: string, icon: string}>;
  iconUrl: string = 'assets/img/countries/'

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public weatherService: WeatherService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.places = [ {flag: this.iconUrl+'beijing.png',capital: 'Beijing' ,country: 'China'},
                    {flag: this.iconUrl+'berlin.png',capital: 'Berlin' ,country: 'Germany'},
                    {flag: this.iconUrl+'canberra.png',capital: 'Canberra' ,country: 'Austraila'},
                    {flag: this.iconUrl+'london.png',capital: 'London' ,country: 'England'},
                    {flag: this.iconUrl+'newyork.png',capital: 'New York' ,country: 'America'},
                    {flag: this.iconUrl+'ottawa.png',capital: 'Ottawa' ,country: 'Canada'},
                    {flag: this.iconUrl+'paris.png',capital: 'Paris' ,country: 'France'},
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
