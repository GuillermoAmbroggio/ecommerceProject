import { IPayment } from './PaymentTypes';
import { IProductOrder } from './ProductTypes';
import { IShipping, IStore } from './ShippingTypes';

export type IStatusOrders =
  | 'process'
  | 'completed'
  | 'canceled'
  | 'incoming'
  | 'ready';

export type IOrder = {
  id: number;
  subTotal: number; // solo precio de los productos
  total: number; // incluye iva + envio + prodcts
  status: IStatusOrders;
  arrivedOrder?: Date; // fecha de llegada o que va a llegar la orden.
  products: IProductOrder[];
  totalProducts: number; // cantidad de productos totales en la orden.
};

export interface IOrderDetail extends IOrder {
  shipping?: IShipping;
  store?: IStore; // si existe store, es la tienda a la cual va a ir a retirar.
  payment: IPayment;
  invoicing?: {};
  dateCreateOrder: Date;
  dateFinishOrder?: Date;
}
