import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(createCommentDto: CreateCommentDto): string;
    findAll(): string;
    findOne(commentsId: string): string;
    update(commentsId: string, updateCommentDto: UpdateCommentDto): string;
    remove(commentsId: string): string;
}
