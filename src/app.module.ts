import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/user.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [PrismaModule, UserModule, PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
