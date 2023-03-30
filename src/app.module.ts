import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ChatModule } from './com.demo-project/modules/chat.module';

@Module({
  imports: [ChatModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
