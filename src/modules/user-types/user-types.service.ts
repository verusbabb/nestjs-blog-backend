import { Injectable } from '@nestjs/common';
import { CreateUserTypeDto } from './dto/create-user-type.dto';
import { UpdateUserTypeDto } from './dto/update-user-type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UserType } from './model/user-type.model';

@Injectable()
export class UserTypesService {
  constructor(@InjectModel(UserType) private userTypeModel: typeof UserType) {}
  create(createUserTypeDto: CreateUserTypeDto) {
    return 'This action adds a new userType';
  }

  findAll() {
    return `This action returns all userTypes`;
  }

  findOne(id: string) {
    return `This action returns a #${id} userType`;
  }

  update(id: string, updateUserTypeDto: UpdateUserTypeDto) {
    return `This action updates a #${id} userType`;
  }

  remove(id: string) {
    return `This action removes a #${id} userType`;
  }
}
