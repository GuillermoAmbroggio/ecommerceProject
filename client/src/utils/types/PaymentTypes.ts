export type IPaymentOptions = 'cash' | 'card' | 'bank' | 'posnet';
export type ICardTypes = 'mastercard' | 'visa';
export type IStatusPay = 'paid' | 'unpaid' | 'rejected';

export type ICreditCard = {
  id: string;
  date_created: Date;
  date_last_updated: Date;
  customer_id: string;
  expiration_month: number; // 1 - 12
  expiration_year: number; // 2020
  first_six_digits: string;
  last_four_digits: string;
  payment_method: {
    id: string;
    name: string;
    payment_type_id: string;
    thumbnail: string;
    secure_thumbnail: string;
  };
  security_code: {
    length: number;
    card_location: string;
  };
  issuer: {
    id: number;
    name: string;
  };
  cardholder: {
    name: string;
    identification: {
      number: string;
      type: string;
    };
  };
  user_id: string;
  live_mode: boolean;
};

export type IAddPayment = {
  card_number: string;
  cardholder: {
    name: string;
    identification: {
      type: string;
      number: string;
    };
  };
  expiration_month: number; // 05
  expiration_year: number; // 2023
  security_code: string;
};

export type IPayment = {
  id: number;
  option: IPaymentOptions;
  card?: {
    cardName: ICardTypes;
    lastNumbers: number;
    feesAmount: number; // cantidad de cuotas ej: 3
    fess: number; // monto de cuotas ej: 300
  };
  bank?: {
    fromCbu: string; // cbu
    fromName: string; // nombre de la cuenta
    nameBank: string; // nombre del banco
  };
  datePay?: Date;
  status: IStatusPay;
};
