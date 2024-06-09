import * as schema from "@/db/schema/item-type-schema";
import { db } from "../db";
import { eq } from "drizzle-orm";

export const getItemTypeWithName = async (name: string) => {
    return await db.query.itemType.findFirst({
        where: eq(schema.itemType.name, name),
    });
};

export const addItemType = async (itemType: string) => {
    if ((await getItemTypeWithName(itemType)) != undefined) return;

    const res = await db
        .insert(schema.itemType)
        .values({ name: itemType.toLowerCase() });
    console.log("🚀 ~ addItemType ~ res:", res);

    return res;
};

export const deleteItemType = async (id: number) => {
    const res = await db
        .delete(schema.itemType)
        .where(eq(schema.itemType.id, id));
    console.log("🚀 ~ deleteItemType ~ res:", res);
};

export const getItemTypeFromRef = () => {
    return db.select().from(schema.itemType);
};
