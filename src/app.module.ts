import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';


@Module({
  imports: [UsersModule, AuthModule, ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),MulterModule.register({dest : './uploads'})],
})
export class AppModule { }
