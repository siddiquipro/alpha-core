import { randomUUID } from "crypto";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "Hello Hono!", date: new Date() });
});

app.get("/users", (c) => {
  const users = Array.from({ length: 100 }).map((_, i) => ({
    id: randomUUID(),
    name: `User ${i + 1}`,
    email: `user-${i + 1}@example.com`,
  }));
  return c.json(users);
});

export default app;
