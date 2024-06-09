import { Link, Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Button } from "tamagui";
import { ThemedText } from "@/components/ThemedText";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                headerShown: true,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "home" : "home-outline"}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="session/[id]"
                options={{
                    title: "Session",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "airplane" : "airplane-outline"}
                            color={color}
                        />
                    ),
                    headerLeft: () => (
                        <Link href="/" asChild>
                            <Button variant="outlined">
                                <ThemedText>back</ThemedText>
                            </Button>
                        </Link>
                    ),
                }}
            />
            <Tabs.Screen
                name="(config)"
                options={{
                    title: "config",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "cog" : "cog-outline"}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
