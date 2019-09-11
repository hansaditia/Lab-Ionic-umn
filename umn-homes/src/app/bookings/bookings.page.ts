import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  router: any;

  constructor() { }

  ngOnInit() {
  }
  editOffer(id: string, slidingItem: IonItemSliding){
    slidingItem.close();
    this.router.navigate(['/','places','tabs','offers','edit',id]);
  }
}
