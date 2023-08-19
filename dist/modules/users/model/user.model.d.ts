import { Model } from 'sequelize-typescript';
import { Post } from '../../posts/model/post.model';
import { Comment } from '../../comments/model/comment.model';
import { UserType } from '../../user-types/model/user-type.model';
export declare class User extends Model {
    user_id: string;
    first_name: string;
    last_name: string;
    email_address: string;
    user_type_id: string;
    user_name: string;
    created_date: Date;
    updated_date: Date;
    isActive: boolean;
    posts: Post[];
    comments: Comment[];
    user_type: UserType;
}
