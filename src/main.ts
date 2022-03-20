import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { AppModule } from './app.module';
import { join } from 'path';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use('/files', express.static(join(process.cwd(), 'files')));
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
