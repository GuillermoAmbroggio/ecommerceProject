import {
  BelongsTo,
  Column,
  CreatedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import Users from '../users/Users';
import { AddressAttributes } from './address.types';

@Table
export default class Address extends Model<AddressAttributes> {
  /* Una direccion pertenece a un usuario */
  @BelongsTo(() => Users, 'user_id')
  user?: Users;

  @Column
  name!: string;

  @Column
  street!: string;

  @Column
  street_number?: string;

  @Column
  apartment?: string;

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
