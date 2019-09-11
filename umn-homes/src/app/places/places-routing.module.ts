import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesPage } from './places.page';
// import { ngModuleJitUrl } from '@angular/compiler';



const routes: Routes = [
    {
        path: 'tabs',
        component: PlacesPage,
        children: [
            {
                path: 'discover',
                children:[
                    {
                        path: '',
                        loadChildren: './discover/discover.module#DiscoverPageModule'
                    },
                    {
                        path: ':placeId',
                        loadChildren: './discover/place-detail/place-detail.module#PlaceDetailPageModule' // gatau pake page atau ngga
                    }
                ]
            },
            {
                path: 'offers',
                children: [
                    {
                        path: '',
                        loadChildren: './offers/offers.module#OffersPageModule'
                    },
                    {
                        path: 'new',
                        loadChildren: '/offers/new-offer/new-offer.module#newOfferPageModule'
                    },
                    {
                        path: 'edit/:placeId',
                        loadChildren: './offers/edit-offer/edit-offer.module#EditOfferPageModule'
                        // loadModule: './offers/edit-offer/edit-offer.module#EditOfferPageModule'
                    },
                    {
                        path: ':placeId',
                        loadChildren: './offers/offer-bookings/offer-bookings.module#OfferBookingsPageModule'
                    },
                    {
                        path: '',
                        redirectTo: '/places/tabs/offers',
                        pathMatch: 'full'
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/places/tabs/discover',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PlacesRoutingModule{}



