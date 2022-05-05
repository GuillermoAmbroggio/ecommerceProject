import {
  Column,
  CreatedAt,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

import { ColorsAttributes } from './colors.types';

@Table
export default class Colors extends Model<ColorsAttributes> {
  @Column
  color!: string;

  @CreatedAt
  @Column
  createdAt?: Date;

  @UpdatedAt
  @Column
  updatedAt?: Date;
}
