import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {IOffer} from '../../../../models/model.interface';
import {ResizedEvent} from 'angular-resize-event';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent implements OnChanges {

  @Input() offer: IOffer;
  @Input() vertical = false;

  public offerImg = '';
  public offerType = {
    co_ownership: 'Co-Ownership'
  };

  public compact;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.offer && changes.offer.currentValue) {
      this.offerImg = 'http://' + changes.offer.currentValue.images[0].url;
    }
  }

  onResized(event: ResizedEvent) {
    console.log(event['newWidth']);
    if (event['newWidth'] < 800) {
      this.compact = true;
    } else {
      this.compact = false;
    }
  }

}
