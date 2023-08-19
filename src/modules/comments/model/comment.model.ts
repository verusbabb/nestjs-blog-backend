import {
  Column,
  Model,
  PrimaryKey,
  Table,
  ForeignKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';
import { User } from '../../users/model/user.model';

@Table
export class Comment extends Model {
  @PrimaryKey
  @Column(DataType.UUID)
  comment_id: string;

  @Column
  @ForeignKey(() => User)
  user_id: string;

  @Column
  comment: string;

  @Column
  created_date: Date;

  @Column
  updated_date: Date;

  @Column({ defaultValue: true })
  isActive: boolean;

  @BelongsTo(() => User)
  user: User;
}
