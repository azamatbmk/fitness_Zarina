import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import type { Request } from 'express';

@Injectable()
export class PreorderRateLimitGuard implements CanActivate {
  private readonly hits = new Map<string, number[]>();
  private readonly windowMs = 60_000;
  private readonly maxRequests = 5;

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const key = request.ip ?? request.socket.remoteAddress ?? 'unknown';
    const now = Date.now();

    const recent = (this.hits.get(key) ?? []).filter(
      (timestamp) => now - timestamp < this.windowMs,
    );

    if (recent.length >= this.maxRequests) {
      throw new HttpException(
        'Too many requests. Try again later.',
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }

    recent.push(now);
    this.hits.set(key, recent);

    return true;
  }
}
