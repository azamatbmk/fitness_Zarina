import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module.js';
import { PreordersModule } from './preorders/preorders.module.js';

@Module({
  imports: [HealthModule, PreordersModule],
})
export class AppModule {}
