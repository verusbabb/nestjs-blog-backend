import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './model/post.model';
export declare class PostsService {
    private postModel;
    constructor(postModel: typeof Post);
    create(createPostDto: CreatePostDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePostDto: UpdatePostDto): string;
    remove(id: string): string;
}
