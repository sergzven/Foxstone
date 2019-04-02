import {AfterContentInit, AfterViewInit, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {IOffer} from '../../../../models/model.interface';
import {ResizedEvent} from 'angular-resize-event';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent implements OnChanges, AfterViewInit {

  @Input() offer: IOffer;
  @Input() vertical = false;

  public offerImg = '';
  public offerType = {
    'co_ownership': 'Co-Ownership',
    'mezzanine_debt': 'Mezzanine Debt'
  };

  public offerProgress = 0;
  public compact = false;
  private contentInit = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.offer && changes.offer.currentValue) {
      this.offerImg = 'http://' + changes.offer.currentValue.images[0].url;
      this.countOfferProgress();
    }
  }

  ngAfterViewInit() {
    this.contentInit = true;
  }

  onResized(event: ResizedEvent) {
    if (!this.contentInit) return false;
    if (event['newWidth'] < 800) {
      this.compact = true;
    } else {
      this.compact = false;
    }
  }

  public countOfferProgress() {
    const max = this.offer.investment_goal;
    const available = this.offer.available_to_invest;
    this.offerProgress = 100 - (available * 100) / max;
  }

}
