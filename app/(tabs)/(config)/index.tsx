import { Link } from "expo-router";
import React from "react";
import { View, Text, ListItem } from "tamagui";

export default function Index() {
    return (
        <View style={{ paddingTop: 290 }}>
            <Link href={"/item-type"} asChild>
                <ListItem>Item type</ListItem>
            </Link>
            <Link href={"/condition"} asChild>
                <ListItem>Condition</ListItem>
            </Link>
            <Link href={"/size"} asChild>
                <ListItem>Size</ListItem>
            </Link>
            <Link href={"/material"} asChild>
                <ListItem>Material</ListItem>
            </Link>
        </View>
    );
}
