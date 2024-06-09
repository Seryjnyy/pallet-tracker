import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const session = sqliteTable("session", {
    id: integer("id").primaryKey(),
    timestamp: integer("timestamp"),
});

export type TSession = typeof session.$inferSelect;
