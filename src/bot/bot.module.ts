import { Module } from '@nestjs/common';
import { DiscordModule } from '@discord-nestjs/core';
import { PlayCommand } from './commands/play.command';
import { PlaylistCommand } from './commands/playlist.command';
import { BotGateway } from './bot.gateway';
import { ContributorsCommand } from './commands/getAllContributors.command';

@Module({
  imports: [DiscordModule.forFeature()],
  providers: [PlayCommand, PlaylistCommand, BotGateway, ContributorsCommand],
})
export class BotModule {}
