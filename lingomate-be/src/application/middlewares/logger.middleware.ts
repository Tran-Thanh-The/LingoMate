import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggerMiddleware.name);
  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(
      JSON.stringify({
        method: req.method,
        url: req.originalUrl,
        headers: req.headers,
        body: req.body,
        queryParams: req.query,
        ipAddress: req.ip,
      }),
    );
    next();
  }
}
