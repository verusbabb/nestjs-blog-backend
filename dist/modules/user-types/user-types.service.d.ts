import { CreateUserTypeDto } from './dto/create-user-type.dto';
import { UpdateUserTypeDto } from './dto/update-user-type.dto';
import { UserType } from './model/user-type.model';
export declare class UserTypesService {
    private userTypeModel;
    constructor(userTypeModel: typeof UserType);
    create(createUserTypeDto: CreateUserTypeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserTypeDto: UpdateUserTypeDto): string;
    remove(id: string): string;
}
