import {
  Column,
  CreatedAt,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { StoresAttributes } from './stores.types';

@Table
export default class Stores extends Model<StoresAttributes> {
  @Column
  name!: string;

  @Column
  street!: string;

  @Column
  street_number?: string;

  @Column
  zip_code!: string;

  @Column
  aditional_info?: string;

  @Column
  city!: string;

  @Column
  state!: string;

  @Column
  phone?: string;

  @Column
  country?: string;

  @CreatedAt
  @Column
  createdAt?: Date;

  @UpdatedAt
  @Column
  updatedAt?: Date;
}
