import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello! My Name is Koshiro 🪄 I'm the official WebX DAO Bot 🤖";
  }
}
