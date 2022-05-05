import {
  Column,
  CreatedAt,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import {
  PaymentsStatus,
  PaymentsTypes,
} from '../paymentCard/paymentsCards.types';
import { PaymentDetailAttributes } from './paymentDetail.types';

@Table
export default class PaymentDetail extends Model<PaymentDetailAttributes> {
  @Column
  payment_method_name!: PaymentsTypes;

  @Column
  status!: PaymentsStatus;

  @Column
  card_id?: string;

  @Column
  customer_id?: string;

  @Column
  bank?: string;

  @Column
  cbu?: string;

  @CreatedAt
  @Column
  createdAt?: Date;

  @UpdatedAt
  @Column
  updatedAt?: Date;
}
