import * as schema from "@/db/schema/material-schema";
import { db } from "../db";
import { eq } from "drizzle-orm";

export const getMaterialWithName = async (name: string) => {
    return await db.query.material.findFirst({
        where: eq(schema.material.name, name),
    });
};

export const addMaterial = async (material: string) => {
    if ((await getMaterialWithName(material)) != undefined) return;

    const res = await db
        .insert(schema.material)
        .values({ name: material.toLowerCase() });
    console.log("🚀 ~ addMaterial ~ res:", res);

    return res;
};

export const deleteMaterial = async (id: number) => {
    const res = await db
        .delete(schema.material)
        .where(eq(schema.material.id, id));
    console.log("🚀 ~ deleteSize ~ res:", res);
};

export const getMaterialFromRef = () => {
    return db.select().from(schema.material);
};
