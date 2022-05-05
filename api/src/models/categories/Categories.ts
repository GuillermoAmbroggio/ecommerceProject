import {
  BelongsToMany,
  Column,
  CreatedAt,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { CategoriesProducts } from '..';
import Products from '../products/Products';
import { CategoriesAttributes } from './categories.types';

@Table
export default class Categories extends Model<CategoriesAttributes> {
  @Column
  name!: string;

  @CreatedAt
  @Column
  createdAt?: Date;

  @UpdatedAt
  @Column
  updatedAt?: Date;

  @BelongsToMany(() => Products, () => CategoriesProducts)
  products?: Products[];
}
