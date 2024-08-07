import { z } from "zod";
import "dotenv/config";

export const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  HOST: z.string().default("localhost"),
});

export const env = envSchema.parse(process.env);
