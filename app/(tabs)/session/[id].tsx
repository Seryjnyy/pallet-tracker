import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";

export default function SessionHome() {
    const { id } = useLocalSearchParams();

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: `Session ${id}` });
    }, [navigation]);

    return (
        <ThemedView>
            <ThemedText>{id}</ThemedText>
        </ThemedView>
    );
}
