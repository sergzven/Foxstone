import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferingsComponent } from './offerings.component';
import {RouterModule, Routes} from '@angular/router';
import { OfferCardComponent } from './components/offer-card/offer-card.component';

const routes: Routes = [
  {path: '', component: OfferingsComponent}
]

@NgModule({
  declarations: [
    OfferingsComponent,
    OfferCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OfferingsModule { }
