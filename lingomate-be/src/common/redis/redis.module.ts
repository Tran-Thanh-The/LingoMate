import { Module, Global } from "@nestjs/common";
import { RedisService } from "./redis.service";
import { Redis } from "ioredis";
import { ConfigService } from "@nestjs/config";

@Global() // Optional: Use this if you want to make it available globally
@Module({
  providers: [
    {
      provide: "REDIS_CLIENT",
      useFactory: (configService: ConfigService) => {
        const host = configService.get<string>("REDIS_HOST", { infer: true });
        const port = configService.get<number>("REDIS_PORT", { infer: true });
        return new Redis({ host, port });
      },
      inject: [ConfigService],
    },
    RedisService,
  ],
  exports: ["REDIS_CLIENT", RedisService],
})
export class RedisModule {}
