import React from "react";
import { View, Text,TouchableOpacity, onPress } from "react-native";
import { CommonStyles } from "../styles/CommonStyles";
import Icon from 'react-native-vector-icons/AntDesign';

const Device = ({ name }) => {

    return (
        <View style={CommonStyles.itemContainer}>
            <Text>{ name }</Text>
            <TouchableOpacity style={CommonStyles.itemButton} onPress={() => console.log('Devices Power Button Pressed!')}>
                <Icon name="wifi" size={18} />
            </TouchableOpacity>
        </View>
    );
}

export default Device;