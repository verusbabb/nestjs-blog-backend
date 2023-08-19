import { Model } from 'sequelize-typescript';
export declare class UserType extends Model {
    user_type_id: string;
    user_type_name: string;
    created_date: Date;
    updated_date: Date;
}
