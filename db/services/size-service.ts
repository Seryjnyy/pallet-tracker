import * as schema from "@/db/schema/size-schema";
import { db } from "../db";
import { eq } from "drizzle-orm";

export const getSizeWithName = async (name: string) => {
    return await db.query.size.findFirst({
        where: eq(schema.size.name, name),
    });
};

export const addSize = async (size: string) => {
    if ((await getSizeWithName(size)) != undefined) return;

    const res = await db
        .insert(schema.size)
        .values({ name: size.toLowerCase() });
    console.log("🚀 ~ addSize ~ res:", res);

    return res;
};

export const deleteSize = async (id: number) => {
    const res = await db.delete(schema.size).where(eq(schema.size.id, id));
    console.log("🚀 ~ deleteSize ~ res:", res);
};

export const getSizeFromRef = () => {
    return db.select().from(schema.size);
};
