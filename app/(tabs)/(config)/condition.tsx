import {
    addCondition,
    deleteCondition,
    getConditionFromRef,
} from "@/db/services/condition-service";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import React, { useState, useTransition } from "react";
import { FlatList } from "react-native";
import { Button, Input, ListItem, Separator, Text, YStack } from "tamagui";

const ConfigListItem = ({ id, name }: { id: number; name: string }) => {
    const [isPending, startTransition] = useTransition();

    const onDelete = () => {
        if (isPending) return;

        startTransition(() => {
            deleteCondition(id);
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

export default function Conditions() {
    const { data } = useLiveQuery(getConditionFromRef());
    const [isPending, startTransition] = useTransition();
    const [newCondition, setNewCondition] = useState("");

    const onSubmit = async () => {
        if (isPending) return;
        if (newCondition.length == 0) return;
        if (newCondition.length > 100) return;

        console.log("Adding condition");
        startTransition(() => {
            addCondition(newCondition);
            setNewCondition("");
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
                    onChangeText={(newVal) => setNewCondition(newVal)}
                    value={newCondition}
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
