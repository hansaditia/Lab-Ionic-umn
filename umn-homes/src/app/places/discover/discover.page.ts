import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];
  
  constructor(private placesService: PlacesService, private menuCtrl: MenuController) { }
  onOpenMenu(){
    this.menuCtrl.toggle('m1');
  }
  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

}
