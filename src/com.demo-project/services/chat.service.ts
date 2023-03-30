import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class ChatGtpService {

  constructor(private readonly http: HttpService){}

  getModels(): Observable<AxiosResponse<any>> {
    return this.http.get(process.env.CHAT_URL + '/v1/models');
  }
}
