import { Module } from '@nestjs/common';
import { DiscordModule } from '@discord-nestjs/core';
import { GatewayIntentBits } from 'discord.js';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    DiscordModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        token: configService.get<string>('discordjs.token'),
        discordClientOptions: {
          intents: [GatewayIntentBits.Guilds],
        },
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DiscordModuleCustom {}
