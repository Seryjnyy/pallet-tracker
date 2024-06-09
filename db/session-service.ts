import * as schema from "@/db/schema/session-schema";
import { db } from "./db";

export const createSession = async () => {
    console.log("what");
    const res = await db
        .insert(schema.session)
        .values({ timestamp: Date.now() });
    console.log("session insert res", res);
};

export const getSessionFromRef = () => {
    return db.select().from(schema.session);
};
