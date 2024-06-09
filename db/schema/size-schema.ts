import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const size = sqliteTable("size", {
    id: integer("id").primaryKey(),
    name: text("name").notNull(),
});

export type TSize = typeof size.$inferSelect;
