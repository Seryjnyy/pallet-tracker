import { Stack } from "expo-router";
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { TamaguiProvider } from "tamagui";
import { tamaguiConfig } from "../tamagui.config";
import { useColorScheme } from "react-native";

export default function RootLayout() {
    const colorScheme = useColorScheme();

    return (
        <TamaguiProvider config={tamaguiConfig}>
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
