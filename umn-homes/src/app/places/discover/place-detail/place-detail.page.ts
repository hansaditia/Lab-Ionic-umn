import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, LoadingController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';
import { ActivatedRoute } from '@angular/router';
import { CreateBookingComponent } from'../../../bookings/create-booking/create-booking.component';
@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})

export class PlaceDetailPage implements OnInit {
  place: Place;
  actionSheetCtrl: any;
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController
  ){ }
  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }
  bookThisPlace(){
    this.loadingCtrl.create({
      keyboardClose:true,
      message: 'Booking the place ...'
    })
    .then(loadingEl =>{
      loadingEl.present();
      setTimeout(()=>{
        loadingEl.dismiss();
        this.modalCtrl.dismiss({ message: 'booked!' },
        'confirm');
      },2000);
    });
  }
  async bookPlace(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Book Place',
      buttons: [{
        text: 'Book w/ Random Date',
        handler:() =>{
          this.modalCtrl.create({
            component:CreateBookingComponent,componentProps:{selectedPlace:this.place}
          })
          .then(modalElement=>{
            modalElement.present();
            return modalElement.onDidDismiss();
          })
          .then(resultData=>{
            console.log(resultData);
          });
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler:() =>{
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  
  onBookPlace(){
    this.modalCtrl
    .create({
      component: CreateBookingComponent,
      componentProps: {selectedPlace:this.place}
    })
    .then(modalElement=>{
      modalElement.present();
      return modalElement.onDidDismiss();
    })
    .then(resultData =>{
      console.log(resultData, resultData.role);
      if(resultData.role === 'confirm'){
        console.log('BOOKED');
      }
    });
    // this.modalCtrl.create({component: CreateBookingComponent});
  }
  // goBack(){
  //   this.route.navigateByUrl('/places/tabs/discover');
  //   // this.navCtrl.navigateBack('/places/tabs/discover');
  // }
}

