import { Model, Column, Table, ForeignKey } from 'sequelize-typescript';
import { Categories, Products } from '..';

@Table
export default class CategoriesProducts extends Model<CategoriesProducts> {
  @ForeignKey(() => Categories)
  @Column
  categoryId!: number;

  @ForeignKey(() => Products)
  @Column
  productId!: number;
}
