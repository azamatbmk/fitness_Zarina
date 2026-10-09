import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

function resolveCorsOrigins(): string[] {
  const fromEnv = process.env.CORS_ORIGINS;

  if (fromEnv?.trim()) {
    return fromEnv
      .split(',')
      .map((origin) => origin.trim())
      .filter(Boolean);
  }

  return ['http://localhost:3000', 'http://127.0.0.1:3000'];
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: resolveCorsOrigins(),
    methods: ['GET', 'POST', 'OPTIONS'],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3001);
}

await bootstrap();
