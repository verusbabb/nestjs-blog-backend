import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { User } from '../../users/model/user.model';

@Table
export class Post extends Model {
  @PrimaryKey
  @Column
  post_id: string;

  @Column
  body: string;

  @Column
  title: string;

  @Column
  @ForeignKey(() => User)
  user_id: string;

  @Column
  created_date: Date;

  @Column
  updated_date: Date;

  @BelongsTo(() => User)
  user: User;
}
