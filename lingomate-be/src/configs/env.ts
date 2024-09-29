import { z } from 'zod';

export const envSchema = z.object({
  DB_HOST: z.string(),
  DB_PORT: z.string(),
  DB_USERNAME: z.string(),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string(),
  JWT_ACCESS_SECRET: z.string(),
  JWT_ACCESS_EXPIRATION: z.string(),
  JWT_REFRESH_SECRET: z.string(),
  JWT_REFRESH_EXPIRATION: z.string(),
  PORT: z.string(),
  AUTH_STRATEGY: z.string(),
  SALT_ROUNDS: z.string(),
});

export type Env = z.infer<typeof envSchema>;
