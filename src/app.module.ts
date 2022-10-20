import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

// WebXDAO: Custom Bot Feature Modules
import { DiscordModuleCustom } from './discord/discord.module';
import { BotConfigModule } from './config/bot-config.module';

@Module({
  imports: [
    // 🔧 -- CORE MODULE
    BotConfigModule,
    DiscordModuleCustom,

    // 💠 -- CUSTOM MODULES
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
