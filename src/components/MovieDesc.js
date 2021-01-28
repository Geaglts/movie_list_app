import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MovieDesc({ title = "", description = "", ...rest }) {
    return (
        <View {...rest}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        fontWeight: "bold",
    },
    description: {
        fontSize: 14,
    },
});
