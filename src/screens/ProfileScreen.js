import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

export const ProfileScreen = ({ route }) => {
    const { name } = route.params;

    return <View style={styles.container}>
            <Text style={styles.title}>{name}'s Profile Page</Text>;

         </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#FFF',
        justifyContent: "center",
        alignItems: "center",
    }
});