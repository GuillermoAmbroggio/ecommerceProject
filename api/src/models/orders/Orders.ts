import {
  BelongsTo,
  BelongsToMany,
  Column,
  CreatedAt,
  ForeignKey,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import Stores from '../stores/Stores';
import Address from '../address/Address';
import Users from '../users/Users';
import { OrdersAttributes } from './orders.types';
import { PaymentsTypes } from '../paymentCard/paymentsCards.types';
import Products from '../products/Products';
import PaymentDetail from '../paymentDetail/PaymentDetail';
import OrdersProducts from '../relationship/ordersProducts/OrdersProducts';

@Table
export default class Orders extends Model<OrdersAttributes> {
  /* Una orden pertenece a un usuario */
  @BelongsTo(() => Users, 'user_id')
  user?: Users;

  /* Una orden pertenece a un direccion (casa o tienda) */
  @BelongsTo(() => Address, 'shipping_address_id')
  address?: Address;

  @BelongsTo(() => Stores, 'store_id')
  stores?: Stores;

  /* Una orden tiene un metodo de pago (casa o tienda) */
  @BelongsTo(() => PaymentDetail, 'payment_detail_id')
  payment_detail?: PaymentDetail;

  /* Una orden tiene uno o muchos productos */
  @BelongsToMany(() => Products, () => OrdersProducts)
  products?: Products[];

  @HasMany(() => OrdersProducts)
  products_detail?: OrdersProducts[];

  @Column
  payment_method_name?: PaymentsTypes;

  @Column
  sub_total!: number;

  @Column
  total!: number;

  @Column
  status!: string;

  @Column
  expected_delivery_date!: Date;

  @CreatedAt
  @Column
  createdAt?: Date;

  @UpdatedAt
  @Column
  updatedAt?: Date;
}
