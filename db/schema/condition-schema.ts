import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const condition = sqliteTable("condition", {
    id: integer("id").primaryKey(),
    name: text("name").notNull(),
});

export type TCondition = typeof condition.$inferSelect;
