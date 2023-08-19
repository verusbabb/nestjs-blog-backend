import {
  BelongsTo,
  BelongsToMany,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
@Table
export class UserType extends Model {
  @PrimaryKey
  @Column
  user_type_id: string;

  @Column
  user_type_name: string;

  @Column
  created_date: Date;

  @Column
  updated_date: Date;
}
