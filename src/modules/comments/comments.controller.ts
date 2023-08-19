import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Comments')
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(':commentsId')
  findOne(@Param('commentsId', ParseUUIDPipe) commentsId: string) {
    return this.commentsService.findOne(commentsId);
  }

  @Patch(':commentsId')
  update(
    @Param('commentsId', ParseUUIDPipe) commentsId: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    return this.commentsService.update(commentsId, updateCommentDto);
  }

  @Delete(':commentsId')
  remove(@Param('commentsId', ParseUUIDPipe) commentsId: string) {
    return this.commentsService.remove(commentsId);
  }
}
