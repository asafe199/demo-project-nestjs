import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class HttpInterceptor implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        req.headers['Authorization'] = "Bearer " + process.env.CHAT_GPT_KEY;
        next();
    }
}