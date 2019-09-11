import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers: Place[];
  router: any;
  
  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.offers = this.placesService.places;
  }
  editOffer(id: string, slidingItem: IonItemSliding){
    slidingItem.close();
    this.router.navigate(['/','places','tabs','offers','edit',id]);
  }
}
