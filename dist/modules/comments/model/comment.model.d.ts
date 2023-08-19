import { Model } from 'sequelize-typescript';
import { User } from '../../users/model/user.model';
export declare class Comment extends Model {
    comment_id: string;
    user_id: string;
    comment: string;
    created_date: Date;
    updated_date: Date;
    isActive: boolean;
    user: User;
}
