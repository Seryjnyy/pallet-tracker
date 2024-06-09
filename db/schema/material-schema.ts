import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const material = sqliteTable("material", {
    id: integer("id").primaryKey(),
    name: text("name").notNull(),
});

export type TMaterial = typeof material.$inferSelect;
