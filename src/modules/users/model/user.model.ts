import {
  Column,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  PrimaryKey,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { Post } from '../../posts/model/post.model';
import { Comment } from '../../comments/model/comment.model';
import { UserType } from '../../user-types/model/user-type.model';

@Table
export class User extends Model {
  @PrimaryKey
  @Column
  user_id: string;

  @Column
  first_name: string;

  @Column
  last_name: string;

  @Column
  email_address: string;

  @Column
  @ForeignKey(() => UserType)
  user_type_id: string;

  @Column
  user_name: string;

  @Column
  created_date: Date;

  @Column
  updated_date: Date;

  @Column({ defaultValue: true })
  isActive: boolean;

  @HasMany(() => Post)
  posts: Post[];

  @HasMany(() => Comment)
  comments: Comment[];

  @BelongsTo(() => UserType)
  user_type: UserType;
}
