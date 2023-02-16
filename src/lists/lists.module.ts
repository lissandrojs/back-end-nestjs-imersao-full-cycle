import { Module } from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListsController } from './lists.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { HttpModule } from '@nestjs/axios';
import { List } from './entities/list.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([List]),
    HttpModule.register({ baseURL: 'http://localhost:8000' }),
  ],
  controllers: [ListsController],
  providers: [ListsService],
})
export class ListsModule {}
