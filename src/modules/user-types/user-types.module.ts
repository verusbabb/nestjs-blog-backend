import { Module } from '@nestjs/common';
import { UserTypesService } from './user-types.service';
import { UserTypesController } from './user-types.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserType } from './model/user-type.model';

@Module({
  imports: [SequelizeModule.forFeature([UserType])],
  controllers: [UserTypesController],
  providers: [UserTypesService],
})
export class UserTypesModule {}
