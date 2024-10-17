import { IsNumber, IsString, ValidateIf } from "class-validator";
import { registerAs } from "@nestjs/config";
import { RedisConfig } from "./redis-config.type";
import validateConfig from "../../../utils/validate-config";

class RedisEnvironmentVariablesValidator {
  @ValidateIf((envValues) => envValues.REDIS_HOST)
  @IsString()
  REDIS_HOST: string;

  @ValidateIf((envValues) => envValues.REDIS_PORT)
  @IsNumber()
  REDIS_PORT: number;

  // @ValidateIf((envValues) => envValues.REDIS_PASSWORD)
  // @IsString()
  // REDIS_PASSWORD: string;
  //
  // @ValidateIf((envValues) => envValues.REDIS_TTL)
  // @IsString()
  // REDIS_TTL: string;
}

export default registerAs<RedisConfig>("redis", () => {
  validateConfig(process.env, RedisEnvironmentVariablesValidator);

  return {
    host: process.env.REDIS_HOST || "localhost",
    port: parseInt(process.env.REDIS_PORT || "6379"),
    ttl: 2592000,
    // password: process.env.REDIS_PASSWORD || 'default_password',
    // ttl: process.env.REDIS_TTL || 'default_ttl',
  };
});
