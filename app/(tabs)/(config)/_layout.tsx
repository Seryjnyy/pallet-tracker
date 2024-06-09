import { Link, Stack, Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Button } from "tamagui";
import { ThemedText } from "@/components/ThemedText";

export default function TabLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#f4511e",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="condition" />
            <Stack.Screen name="size" />
            <Stack.Screen name="material" />
            <Stack.Screen name="item-type" />
        </Stack>
    );
}
