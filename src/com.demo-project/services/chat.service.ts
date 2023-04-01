import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Configuration, OpenAIApi } from 'openai';
import { Observable } from 'rxjs';
import { Chat } from '../dto/chat-dto';

@Injectable()
export class ChatGtpService {

  openAi: OpenAIApi;
  constructor(private readonly http: HttpService){
    const configuration = new Configuration({
      apiKey: process.env.CHAT_GPT_KEY,
    });
    this.openAi = new OpenAIApi(configuration);
  }

  getModels(): Observable<AxiosResponse<any>> {
    return this.http.get(process.env.CHAT_URL + '/v1/models');
  }

  async getConnection() : Promise<any> {
    return await this.openAi.listEngines();
  }

  async chat(chat: Chat) : Promise<any>{
    const response = await this.openAi.createCompletion({
      model: "text-davinci-003",
      prompt: chat.message,
      temperature: 0,
      max_tokens: 7,
      stop: ['\n']
    });
    return response;
  }
}
