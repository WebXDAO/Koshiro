import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const globalPrefix = configService.get<string>('apiVersion');
  app.setGlobalPrefix(globalPrefix);

  const port = configService.get<number>('port');

  await app.listen(port, () => {
    console.log(
      '[💮 Koshiro Bot]: Listening to --> http://localhost:' +
        port +
        '/' +
        globalPrefix,
    );
  });
}
bootstrap();
