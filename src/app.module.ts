import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { PostsModule } from './modules/posts/posts.module';
import { UserTypesModule } from './modules/user-types/user-types.module';
import { CommentsModule } from './modules/comments/comments.module';

const configService = new ConfigService();
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: configService.get('DATABASE_HOST'),
      port: configService.get('DATABASE_PORT'),
      username: configService.get('DATABASE_USERNAME'),
      password: configService.get('DATABASE_PASSWORD'),
      database: configService.get('DATABASE_NAME'),
      schema: 'blog',
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    PostsModule,
    CommentsModule,
    UserTypesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
