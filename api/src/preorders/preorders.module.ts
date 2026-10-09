import { Module } from '@nestjs/common';
import { PreorderRateLimitGuard } from './preorder-rate-limit.guard.js';
import { PreordersController } from './preorders.controller.js';
import { PreordersService } from './preorders.service.js';

@Module({
  controllers: [PreordersController],
  providers: [PreordersService, PreorderRateLimitGuard],
})
export class PreordersModule {}
