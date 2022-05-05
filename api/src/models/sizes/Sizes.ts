import {
  BelongsToMany,
  Column,
  CreatedAt,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

import { SizesAttributes } from './sizes.types';

@Table
export default class Sizes extends Model<SizesAttributes> {
  @Column
  size!: string;

  @CreatedAt
  @Column
  createdAt?: Date;

  @UpdatedAt
  @Column
  updatedAt?: Date;
}
