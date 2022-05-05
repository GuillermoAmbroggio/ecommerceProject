import {
  Column,
  CreatedAt,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Orders } from '..';
import Address from '../address/Address';
import { UsersAttributes } from './users.types';

@Table
export default class Users extends Model<UsersAttributes> {
  @Column
  email!: string;

  @Column
  role!: 'client' | 'admin' | 'developer';

  @Column
  name!: string;

  @Column
  lastname!: string;

  @Column
  phone?: string;

  @Column
  password!: string;

  @Column
  country?: string;

  @Column
  birthdate?: string;

  /* Un usuario puede tener muchas direcciones */
  @HasMany(() => Address, 'user_id')
  addresses?: Address[];

  @CreatedAt
  @Column
  createdAt?: Date;

  @UpdatedAt
  @Column
  updatedAt?: Date;
}
