import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration';

@Module({
  imports: [
    /**
     * @param envFilePath
     *    We load the env file during the nestjs initialization.
     *    Then we dispatch env variables to configuration.ts
     *
     *  @param isGlobal
     *    Use the ConfigService everywhere in the application
     */
    ConfigModule.forRoot({
      envFilePath: ['.development.env'],
      load: [configuration],
      isGlobal: true,
    }),
  ],
})
export class BotConfigModule {}
