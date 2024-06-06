import * as SQLite from "expo-sqlite";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { Text, View } from "react-native";
import { Button, Select } from "tamagui";

const CountResult = ({ amounts }: { amounts: Map<number, number> }) => {
    return <ThemedView></ThemedView>;
};

const CountModifier = ({ amounts }: { amounts: Map<number, number> }) => {
    const onIncrease = () => {
        amounts;
    };

    return (
        <ThemedView>
            <ThemedView>
                <ThemedText>Wooden pallets</ThemedText>
            </ThemedView>
            <ThemedView>
                {Array.from(amounts).map(([k, v]) => (
                    <ThemedView
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 20,
                        }}
                    >
                        <ThemedText key={k}>
                            {k}
                            {v}
                        </ThemedText>
                        <ThemedView
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 2,
                            }}
                        >
                            <Button title="+"></Button>
                            <Button title="-"></Button>
                        </ThemedView>
                    </ThemedView>
                ))}
            </ThemedView>
        </ThemedView>
    );
};

// const db = SQLite.openDatabaseAsync("databaseName");

export default function Index() {
    // const amounts = [100, 200, 350, 400, 500];
    // const amountsWithCount: [number, number][] = amounts.map((amount) => [
    //     amount,
    //     0,
    // ]);
    const [count, setCount] = useState<Map<number, number>>(
        new Map([[100, 1]])
    );

    // const setUp = async () => {
    //     const db = await SQLite.openDatabaseAsync("databaseName");

    //     // `execAsync()` is useful for bulk queries when you want to execute altogether.
    //     // Please note that `execAsync()` does not escape parameters and may lead to SQL injection.
    //     await db.execAsync(`
    //   PRAGMA journal_mode = WAL;
    //   CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
    //   INSERT INTO test (value, intValue) VALUES ('test1', 123);
    //   INSERT INTO test (value, intValue) VALUES ('test2', 456);
    //   INSERT INTO test (value, intValue) VALUES ('test3', 789);
    //   `);

    //     const result = await db.runAsync(
    //         "INSERT INTO test (value, intValue) VALUES (?, ?)",
    //         "aaa",
    //         100
    //     );
    //     console.log(result.lastInsertRowId, result.changes);
    // };

    return (
        <ThemedView
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <ThemedText>Edit app/index.tsx to edit this screen.</ThemedText>
            <Button>hello</Button>
            <Select defaultValue="">
                <Select.Trigger>
                    <Select.Value placeholder="Search..." />
                </Select.Trigger>
                <Select.Content>
                    <Select.ScrollUpButton />
                    <Select.Viewport>
                        <Select.Group>
                            <Select.Label />
                            <Select.Item index={0} value="hello">
                                <Select.ItemText>{"item.name"}</Select.ItemText>
                            </Select.Item>
                        </Select.Group>
                    </Select.Viewport>
                    <Select.ScrollDownButton />
                </Select.Content>
            </Select>
            {/* <CountResult amounts={count} />
            <CountModifier amounts={count} /> */}
            {/* <Button title="set up" onPress={setUp}></Button> */}
        </ThemedView>
    );
}
