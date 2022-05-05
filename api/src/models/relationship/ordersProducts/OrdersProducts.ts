import {
  Model,
  Column,
  Table,
  ForeignKey,
  HasMany,
  BelongsTo,
} from 'sequelize-typescript';
import Orders from '../../orders/Orders';
import Products from '../../products/Products';
import { OrdersProductsAttributes } from './ordersProducts.types';

@Table
export default class OrdersProducts extends Model<OrdersProductsAttributes> {
  @ForeignKey(() => Orders)
  @Column
  order_id!: number;

  @ForeignKey(() => Products)
  @Column
  product_id!: number;

  @BelongsTo(() => Orders, 'order_id')
  orders?: Orders;

  @BelongsTo(() => Products, 'product_id')
  products?: Products;

  @Column
  quantity!: number;
}
