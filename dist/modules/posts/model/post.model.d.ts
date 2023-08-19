import { Model } from 'sequelize-typescript';
import { User } from '../../users/model/user.model';
export declare class Post extends Model {
    post_id: string;
    body: string;
    title: string;
    user_id: string;
    created_date: Date;
    updated_date: Date;
    user: User;
}
