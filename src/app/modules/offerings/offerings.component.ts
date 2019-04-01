import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {IOffer} from '../../models/model.interface';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styles: []
})
export class OfferingsComponent implements OnInit {

  public offerings: IOffer[] = [];

  constructor(
    private _api: ApiService
  ) { }

  ngOnInit() {
    this._api.getOfferings().subscribe(
      data => {
        this.offerings = data.offerings;
        console.log('offerings', this.offerings);
        while (this.offerings.length < 4) {
          this.offerings.push(...data.offerings);
        }
      },
      error => console.log('Error', error)
    );
  }

}
