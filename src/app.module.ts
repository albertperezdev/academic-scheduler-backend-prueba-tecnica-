import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { SubjectsModule } from './subjects/subjects.module';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '244148@Mari0',
      database: 'horarios',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UsersModule]),
    UsersModule,
    SubjectsModule,
    ScheduleModule,
  ],
})
export class AppModule {}
