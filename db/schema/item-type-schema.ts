import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const itemType = sqliteTable("item", {
    id: integer("id").primaryKey(),
    name: text("name").notNull(),
});

export type TItemType = typeof itemType.$inferSelect;
