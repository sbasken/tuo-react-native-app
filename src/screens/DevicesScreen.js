import React from "react";
import { View, Text, TouchableOpacity, onPress, SafeAreaView } from "react-native";
import { CommonStyles } from "../styles/CommonStyles";
import Device from "../components/Device";
import Icon from 'react-native-vector-icons/Ionicons';

const DevicesScreen = ({ route }) => {
    const { roomName } = route.params;
    console.log(roomName);
    return (
        <SafeAreaView style={CommonStyles.wrapper}>
            <View style={CommonStyles.container}>
                <Text style={CommonStyles.title}>{roomName}</Text>
                <View style={CommonStyles.listContainer}>
                    <Device />
                    <Device />
                    <Device />
                    <Device />
                </View>
                <View style={CommonStyles.buttonContainer}>
                    <TouchableOpacity style={CommonStyles.itemButton} onPress={onPress}>
                        <Icon name="add" size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default DevicesScreen;