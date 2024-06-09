import { View, Text } from "react-native";
import React from "react";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { createSession, getSessionFromRef } from "@/db/session-service";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Button } from "tamagui";
import { Link } from "expo-router";

export default function Index() {
    const { data } = useLiveQuery(getSessionFromRef());

    const handleCreateSession = () => {
        createSession();
    };

    return (
        <ThemedView>
            <Button onPress={handleCreateSession}>Create Session</Button>
            {data.map((session) => {
                const timestamp = session.timestamp
                    ? new Date(session.timestamp)
                    : null;

                return (
                    <ThemedView>
                        <ThemedText>{session.id} </ThemedText>
                        <ThemedText>{timestamp?.toDateString()}</ThemedText>
                        <ThemedText>
                            {timestamp?.toLocaleDateString()}
                        </ThemedText>
                        <ThemedText>
                            {timestamp?.toLocaleTimeString()}
                        </ThemedText>
                        <Link
                            href={{
                                pathname: `/session/${session.id}`,
                            }}
                        >
                            View first user details
                        </Link>
                    </ThemedView>
                );
            })}
        </ThemedView>
    );
}
