import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const SettingsScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings Page</Text>
        </View>
    )
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

export default SettingsScreen;