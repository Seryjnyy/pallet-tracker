import {
    addSize,
    deleteSize,
    getSizeFromRef,
} from "@/db/services/size-service";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import React, { useState, useTransition } from "react";
import { FlatList } from "react-native";
import { Button, Input, ListItem, Separator, Text, YStack } from "tamagui";

const ConfigListItem = ({ id, name }: { id: number; name: string }) => {
    const [isPending, startTransition] = useTransition();

    const onDelete = () => {
        if (isPending) return;

        startTransition(() => {
            deleteSize(id);
        });
    };

    return (
        <ListItem style={{ marginBottom: 8 }}>
            {name}
            <Button disabled={isPending} onPress={onDelete}>
                X
            </Button>
        </ListItem>
    );
};

export default function Sizes() {
    const { data } = useLiveQuery(getSizeFromRef());
    const [isPending, startTransition] = useTransition();
    const [newSize, setNewSize] = useState("");

    const onSubmit = async () => {
        if (isPending) return;
        if (newSize.length == 0) return;
        if (newSize.length > 100) return;

        startTransition(() => {
            addSize(newSize);
            setNewSize("");
        });
    };

    const renderItem = ({ item }: { item: any }) => {
        return <ConfigListItem id={item.id} name={item.name} />;
    };

    return (
        <YStack
            style={{
                paddingTop: 50,
                paddingHorizontal: "4%",
            }}
            gap="$10"
        >
            <YStack
                style={{
                    width: "100%",
                }}
                gap={"$2"}
            >
                <Input
                    onChangeText={(newVal) => setNewSize(newVal)}
                    value={newSize}
                />
                <Button onPress={onSubmit} disabled={isPending}>
                    Add
                </Button>
            </YStack>

            <YStack gap="$2">
                <Text>{data.length}</Text>
                <Separator />
                <FlatList data={data} renderItem={renderItem} />
            </YStack>
        </YStack>
    );
}
