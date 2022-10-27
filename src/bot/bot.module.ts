import { Module } from '@nestjs/common';
import { DiscordModule } from '@discord-nestjs/core';
import { PlayCommand } from './commands/play.command';
import { PlaylistCommand } from './commands/playlist.command';
import { BotGateway } from './bot.gateway';

@Module({
  imports: [DiscordModule.forFeature()],
  providers: [BotGateway],
})
export class BotModule {}
