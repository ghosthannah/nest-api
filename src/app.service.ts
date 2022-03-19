import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHealthcheck(): string {
    return "NestJS server is running";
  }

  getDefault(): string {
    return "Default Response";
  }
}
