import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './model/comment.model';
export declare class CommentsService {
    private commentModel;
    constructor(commentModel: typeof Comment);
    create(_createCommentDto: CreateCommentDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, _updateCommentDto: UpdateCommentDto): string;
    remove(id: string): string;
}
