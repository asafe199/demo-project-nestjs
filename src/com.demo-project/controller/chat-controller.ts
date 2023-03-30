import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { ChatGtpService } from '../services/chat.service';
import { Response } from 'express';

@Controller('chat')
export class ChatGptController {

  constructor(private readonly chatGtpService: ChatGtpService) {}

  @Get('models')
  getModels(@Res() res : Response)  {
    this.chatGtpService.getModels().subscribe((e) => {
      res.status(HttpStatus.OK).json(e);
    }, (e) => {
      throw 'An error happened!';
    })
    .unsubscribe();
  }
}
