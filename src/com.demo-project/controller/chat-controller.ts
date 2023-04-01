import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { ChatGtpService } from '../services/chat.service';
import { Response } from 'express';
import { Chat } from '../dto/chat-dto';

@Controller('chat')
export class ChatGptController {

  constructor(private readonly chatGtpService: ChatGtpService) {}

  @Get('connection')
  async connection(@Res() res : Response)  {
    const data = await this.chatGtpService.getConnection();
    res.status(HttpStatus.OK).json(data);
  }

  @Post()
  async chat(@Body() data: Chat, @Res() res: Response){
      const result = await this.chatGtpService.chat(data);
      res.status(HttpStatus.OK).json(result);
  }

}
