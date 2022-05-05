import {
  BelongsToMany,
  Column,
  CreatedAt,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Categories, CategoriesProducts, OrdersProducts } from '../../models';
import Orders from '../orders/Orders';
import { ProductsModelAttributes } from './products.types';

@Table
export default class Products extends Model<ProductsModelAttributes> {
  @Column
  name!: string;

  @Column
  price!: number;

  @Column
  description!: string;

  @Column
  default_image!: string;

  @Column
  images!: string;

  @Column
  stock!: string;

  /* Un producto pertenece a una o muchas ordenes */
  @BelongsToMany(() => Orders, () => OrdersProducts)
  orders?: Orders[];

  @BelongsToMany(() => Categories, () => CategoriesProducts)
  categories?: Categories[];

  @HasMany(() => OrdersProducts)
  products_detail?: OrdersProducts[];

  @CreatedAt
  @Column
  createdAt?: Date;

  @UpdatedAt
  @Column
  updatedAt?: Date;

  OrdersProducts: any;
}
