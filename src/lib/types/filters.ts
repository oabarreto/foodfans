export interface FilterOption {
  id: string;
  label: string;
  checked: boolean;
}

export interface LocationFilters {
  country: string;
  city: string;
}

export interface TextFilters {
  name: string;
  nickname: string;
}

export interface FilterState {
  foods: FilterOption[];
  location: LocationFilters;
  text: TextFilters;
  verified: boolean;
  gender: string;
}
