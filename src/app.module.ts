import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { BlogModule } from './blog/blog.module';
import { NewsModule } from './news/news.module';
import { TendersModule } from './tenders/tenders.module';
import { CareersModule } from './careers/careers.module';
import { TeamModule } from './team/team.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    AuthModule,
    UserModule,
    PrismaModule,
    BlogModule,
    NewsModule,
    TendersModule,
    CareersModule,
    TeamModule,
     
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}

