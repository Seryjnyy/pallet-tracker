import * as schema from "@/db/schema/condition-schema";
import { db } from "../db";
import { eq } from "drizzle-orm";

export const getConditionWithName = async (name: string) => {
    return await db.query.condition.findFirst({
        where: eq(schema.condition.name, name),
    });
};

export const addCondition = async (condition: string) => {
    if ((await getConditionWithName(condition)) != undefined) return;

    const res = await db
        .insert(schema.condition)
        .values({ name: condition.toLowerCase() });
    console.log("🚀 ~ addCondition ~ res:", res);
    return res;
};

export const deleteCondition = async (id: number) => {
    console.log("🚀 ~ deleteCondition ~ id:", id);
    const res = await db
        .delete(schema.condition)
        .where(eq(schema.condition.id, id));
    console.log("🚀 ~ deleteCondition ~ res:", res);
};

export const getConditionFromRef = () => {
    return db.select().from(schema.condition);
};
