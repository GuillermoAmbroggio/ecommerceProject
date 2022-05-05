export interface IAddress {
  name: string;
  street: string;
  street_number?: string;
  apartment?: string;
  zip_code: string;
  aditional_info: string;
  city: string;
  state: string;
  phone?: string;
  country?: string;
}

export interface IGetAddress extends IAddress {
  id: string;
}
