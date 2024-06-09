import { openDatabaseSync } from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import * as conditionSchema from "@/db/schema/condition-schema";
import * as sessionSchema from "@/db/schema/session-schema";
import * as materialSchema from "@/db/schema/material-schema";
import * as sizeSchema from "@/db/schema/size-schema";
import * as itemTypeSchema from "@/db/schema/item-type-schema";

const expoDb = openDatabaseSync("db.db", { enableChangeListener: true });
export const db = drizzle(expoDb, {
    schema: {
        ...conditionSchema,
        ...sessionSchema,
        ...materialSchema,
        ...sizeSchema,
        ...itemTypeSchema,
    },
});
