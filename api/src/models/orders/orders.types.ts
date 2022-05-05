import { AddressAttributes } from '../address/address.types';
import {
  ITransfer,
  ICreditCard,
  PaymentsTypes,
} from '../paymentCard/paymentsCards.types';
import { StoresAttributes } from '../stores/stores.types';

export type IStatusOrder =
  | 'generated'
  | 'in_process'
  | 'unpaied'
  | 'paied'
  | 'confirm_pay' // para transferencias.
  | 'in_shipment'
  | 'completed'
  | 'canceled';

export interface OrderReqBody {
  user_id?: number;
  shipping_address_id?: number;
  store_id?: number;
  payment_method_name?: PaymentsTypes;
  payment_detail: { card_id: string } | ITransfer;
  sub_total: number;
  total: number;
}

export interface OrdersAttributes {
  id?: number;
  user_id?: number;
  shipping_address_id?: number;
  store_id?: number;
  payment_method_name?: PaymentsTypes;
  payment_detail_id?: number;
  sub_total: number;
  total: number;
  status: IStatusOrder;
  expected_delivery_date?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface OrdersResponse {
  id?: number;
  user_id?: string;
  shipping_address?: AddressAttributes;
  store?: StoresAttributes;
  payment_method?: number;
  payment_detail?: ICreditCard | ITransfer;
  products_detail: {
    id?: number;
    name: string;
    quantity: number;
    price: number;
    images: string;
    in_stock: number;
  }[];
  products_quantity: number;
  sub_total: number;
  total: number;
  status: IStatusOrder;
  createdAt?: Date;
  updatedAt?: Date;
}
