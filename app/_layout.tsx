import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { TamaguiProvider } from "tamagui";
import { tamaguiConfig } from "../tamagui.config";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "../drizzle/migrations";

import { db } from "@/db/db";

import { useEffect } from "react";
import { useFonts } from "expo-font";

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const { success, error } = useMigrations(db, migrations);
    // const [loaded] = useFonts({
    //     Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    //     InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    // });

    // useEffect(() => {
    //     if (loaded) {
    //         // can hide splash screen here
    //     }
    // }, [loaded]);

    // if (!loaded) {
    //     return (
    //         <ThemedView>
    //             <ThemedText>Didn't load the font.</ThemedText>
    //         </ThemedView>
    //     );
    // }
    // if (!fontError) {
    //     return (
    //         <ThemedView>
    //             <ThemedText>Error in loading font.</ThemedText>
    //         </ThemedView>
    //     );
    // }

    // if (error) {
    //     return (
    //         <ThemedView>
    //             <ThemedText>Migration error: {error.message}</ThemedText>
    //         </ThemedView>
    //     );
    // }
    // if (!success) {
    //     return (
    //         <ThemedView>
    //             <ThemedText>Migration is in progress...</ThemedText>
    //         </ThemedView>
    //     );
    // }

    return (
        <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
            <ThemeProvider
                value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
                <Stack>
                    <Stack.Screen
                        name="(tabs)"
                        options={{ headerShown: false }}
                    />
                    {/* <Stack.Screen name="+not-found" /> */}
                    {/* <Stack.Screen name="index" /> */}
                </Stack>
            </ThemeProvider>
        </TamaguiProvider>
    );
}
