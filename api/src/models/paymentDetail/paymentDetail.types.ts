import {
  PaymentsStatus,
  PaymentsTypes,
} from '../paymentCard/paymentsCards.types';

export interface PaymentDetailAttributes {
  id?: number;
  order_id?: number;
  payment_method_name: PaymentsTypes;
  status: PaymentsStatus;
  card_id?: string;
  customer_id?: string;
  bank?: string;
  cbu?: string;
}
