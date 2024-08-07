import { serve } from "@hono/node-server";
import app from "./app.js";
import { env } from "./utils/env.js";

serve({ fetch: app.fetch, port: env.PORT }, () => console.log(`Server running on port ${env.PORT}`));
