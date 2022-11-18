import { PrefixCommandTransformPipe } from '@discord-nestjs/common';
import {
  InjectDiscordClient,
  Once,
  Payload,
  PrefixCommand,
  UsePipes,
} from '@discord-nestjs/core';
import { Injectable, Logger } from '@nestjs/common';
import { Client } from 'discord.js';

@Injectable()
export class BotGateway {
  private readonly logger = new Logger(BotGateway.name);

  constructor(
    @InjectDiscordClient()
    private readonly client: Client,
  ) {}

  @Once('ready')
  onReady() {
    this.logger.log(`Bot ${this.client.user.tag} was started! `);
  }

  /**
   * This need to be fixed. The bot still not collect the message.
   */
  @PrefixCommand({ prefix: '!', name: 'dev' })
  @UsePipes(PrefixCommandTransformPipe)
  async onMessage(@Payload() dto: any): Promise<string> {
    console.log(dto, 'coucou');
    return 'Message processed successfully';
  }
}
