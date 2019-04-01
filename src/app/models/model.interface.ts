export interface ILocation {
  address1: string;
  address2: string;
  zip: string;
  city: string;
  country: string;
  district: string;
  canton: string;
}

export interface IImage {
  url: string;
}

export interface IVideo {
  iframe_html?: string;
}

export interface IOffer {
  id: string;
  name: string;
  slug: string;
  status: string;
  location: ILocation;
  type: string;
  purchase_price: number;
  loan_to_value: number;
  categories: any[];
  expected_roi: number;
  minimum_investment: number;
  holding_period: string;
  map: string;
  description: string;
  is_coming_soon: number;
  is_waiting_list: number;
  interested_investors: number;
  available_to_invest: number;
  investment_goal: number;
  images?: IImage[];
  videos?: IVideo[];
}


