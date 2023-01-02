import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as expressListRoutes from 'express-list-routes';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe)
  const config = new DocumentBuilder()
    .setTitle('Training api')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const server = app.getHttpServer();
  const router = server._events.request._router;
  const PORT = process.env.PORT
  await app.listen(PORT, () => {
    console.log("App run port:" + PORT);
    console.log(expressListRoutes({}, 'API:', router));
  });


}
bootstrap();
