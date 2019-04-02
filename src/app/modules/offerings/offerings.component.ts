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

  private defaultOfferings: IOffer[] = [
    {
      id: '04e20b7b-e4b1-4916-b642-5a25017dafb0',
      name: 'Residence de la Colline',
      slug: 'meyrin',
      status: 'open',
      location: {
        address1: 'En Chenaux 6',
        address2: '``',
        zip: '1426',
        city: 'Lausane',
        country: 'ch',
        district: '``',
        canton: 'Vaud'
      },
      type: 'co_ownership',
      purchase_price: 25000000,
      loan_to_value: 55,
      categories: [],
      expected_roi: 4.88,
      minimum_investment: 100000,
      holding_period: '7 years',
      map: '46.8520645|6.718568899999999',
      description: 'Offering description',
      is_coming_soon: 0,
      is_waiting_list: 1,
      interested_investors: 5,
      available_to_invest: 1000000,
      investment_goal: 1500000,
      images: [
        {
          url: 'picsum.photos/1024/767'
        }
      ],
      videos: [
        {
          iframe_html: ''
        }
      ]
    },
    {
      id: '04e20b7b-e4b1-4916-b642-5a25017dafb0',
      name: 'Calla Rosa Complex',
      slug: 'meyrin',
      status: 'pre-subscribe',
      location: {
        address1: 'En Chenaux 6',
        address2: '``',
        zip: '1426',
        city: 'Carouge',
        country: 'ch',
        district: '``',
        canton: 'Geneva'
      },
      type: 'co_ownership',
      purchase_price: 22000000,
      loan_to_value: 60,
      categories: [],
      expected_roi: 5.2,
      minimum_investment: 500000,
      holding_period: '7 years',
      map: '46.8520645|6.718568899999999',
      description: 'Offering description',
      is_coming_soon: 0,
      is_waiting_list: 1,
      interested_investors: 5,
      available_to_invest: 10000000,
      investment_goal: 1500000,
      images: [
        {
          url: 'picsum.photos/1023/768'
        }
      ],
      videos: [
        {
          iframe_html: ''
        }
      ]
    },
    {
      id: '04e20b7b-e4b1-4916-b642-5a25017dafb0',
      name: 'Hauts de Vesenaz',
      slug: 'meyrin',
      status: 'completed',
      location: {
        address1: 'En Chenaux 6',
        address2: '``',
        zip: '1426',
        city: 'Vesenaz',
        country: 'ch',
        district: '``',
        canton: 'Geneve'
      },
      type: 'mezzanine_debt',
      purchase_price: 8000000,
      loan_to_value: 85,
      categories: [],
      expected_roi: 6.5,
      minimum_investment: 250000,
      holding_period: '7 years',
      map: '46.8520645|6.718568899999999',
      description: 'Offering description',
      is_coming_soon: 0,
      is_waiting_list: 1,
      interested_investors: 5,
      available_to_invest: 0,
      investment_goal: 1500000,
      images: [
        {
          url: 'picsum.photos/1024/768'
        }
      ],
      videos: [
        {
          iframe_html: ''
        }
      ]
    }
  ];

  constructor(
    private _api: ApiService
  ) { }

  ngOnInit() {
    this._api.getOfferings().subscribe(
      data => {
        this.offerings = data.offerings;
        // console.log('offerings', this.offerings);
        let i = 0;
        while (this.offerings.length < 4) {
          this.offerings.push(this.defaultOfferings[i]);
          i++;
        }
        // console.log('offerings', this.offerings);
      },
      error => console.log('Error', error)
    );
  }

};
