import { UserTypesService } from './user-types.service';
import { CreateUserTypeDto } from './dto/create-user-type.dto';
import { UpdateUserTypeDto } from './dto/update-user-type.dto';
export declare class UserTypesController {
    private readonly userTypesService;
    constructor(userTypesService: UserTypesService);
    create(createUserTypeDto: CreateUserTypeDto): string;
    findAll(): string;
    findOne(userTypeId: string): string;
    update(userTypeId: string, updateUserTypeDto: UpdateUserTypeDto): string;
    remove(userTypeId: string): string;
}
