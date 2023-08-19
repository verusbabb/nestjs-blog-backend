import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto): string;
    findAll(): string;
    findOne(postId: string): string;
    update(postId: string, updatePostDto: UpdatePostDto): string;
    remove(postId: string): string;
}
