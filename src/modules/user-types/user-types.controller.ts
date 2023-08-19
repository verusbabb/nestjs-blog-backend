import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { UserTypesService } from './user-types.service';
import { CreateUserTypeDto } from './dto/create-user-type.dto';
import { UpdateUserTypeDto } from './dto/update-user-type.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User Types')
@Controller('user-types')
export class UserTypesController {
  constructor(private readonly userTypesService: UserTypesService) {}

  @Post()
  create(@Body() createUserTypeDto: CreateUserTypeDto) {
    return this.userTypesService.create(createUserTypeDto);
  }

  @Get()
  findAll() {
    return this.userTypesService.findAll();
  }

  @Get(':userTypeId')
  findOne(@Param('userTypeId', ParseUUIDPipe) userTypeId: string) {
    return this.userTypesService.findOne(userTypeId);
  }

  @Patch(':userTypeId')
  update(
    @Param('userTypeId', ParseUUIDPipe) userTypeId: string,
    @Body() updateUserTypeDto: UpdateUserTypeDto,
  ) {
    return this.userTypesService.update(userTypeId, updateUserTypeDto);
  }

  @Delete(':userTypeId')
  remove(@Param('userTypeId', ParseUUIDPipe) userTypeId: string) {
    return this.userTypesService.remove(userTypeId);
  }
}
