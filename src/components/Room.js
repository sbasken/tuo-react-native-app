import React from 'react';
import { View, Text, TouchableOpacity, onPress } from 'react-native';
import { CommonStyles } from '../styles/CommonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Room = ({ name, isOn }) => {
    const navigation = useNavigation();
    console.log( name, isOn );

    return (
        <View style={CommonStyles.itemContainer} >
            <Text onPress={() => navigation.navigate('Devices', { roomName: name})}>{name}</Text>
            <TouchableOpacity style={CommonStyles.itemButton} onPress={() => console.log('Room Power Button Pressed!')} >
                { isOn? <Icon style={{color: '#7D55C7'}} name="toggle-on" size={20}/> : <Icon name="toggle-off" style={{color: '#7D55C7'}} size={20} /> }
            </TouchableOpacity>
        </View>
    )
}

export default Room;