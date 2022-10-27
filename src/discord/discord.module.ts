import { Module } from '@nestjs/common';
import { DiscordModule } from '@discord-nestjs/core';
import { GatewayIntentBits } from 'discord.js';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    DiscordModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        token: configService.get<string>('discordjs.token'),
        discordClientOptions: {
          intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,

            // You must allow message content for your application in discord developers
            // https://support-dev.discord.com/hc/en-us/articles/4404772028055
            // GatewayIntentBits.MessageContent,
          ],
          prefix: '!',
        },
        failOnLogin: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DiscordModuleCustom {}
