import { ExtractJwt, Strategy } from "passport-jwt";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ConfigService } from "@nestjs/config";
import { JwtRefreshPayloadType } from "./types/jwt-refresh-payload.type";
import { OrNeverType } from "@/utils/types/or-never.type";
import { AllConfigType } from "@/config/config.type";
import { RedisService } from '@/common/redis/redis.service';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  "jwt-refresh",
) {
  constructor(
    configService: ConfigService<AllConfigType>,
    private readonly redisService: RedisService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get("auth.refreshSecret", { infer: true }),
    });
  }

  public async validate(
    payload: JwtRefreshPayloadType,
  ): Promise<OrNeverType<JwtRefreshPayloadType>> {
    // Check if the token is blacklisted
    const isBlacklisted = await this.redisService.get(
      `blacklist:${payload.sessionId}`,
    );

    if (isBlacklisted) {
      throw new UnauthorizedException();
    }

    if (!payload.sessionId) {
      throw new UnauthorizedException();
    }

    return payload;
  }
}
