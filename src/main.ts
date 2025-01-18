import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  
  const config = new DocumentBuilder()
    .setTitle('E-Commerce-Multitenand')
    .setDescription('The E-Commerce API description')
    .setVersion('1.0')
    .addTag('e-commerce')
    .build();

  const document = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger-ui', app, document);
  await app.listen(port);
}
bootstrap();
