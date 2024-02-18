import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, onPress, SafeAreaView, FlatList } from "react-native";
import { CommonStyles } from "../styles/CommonStyles";
import Device from "../components/Device";
import Icon from 'react-native-vector-icons/Ionicons';

const DevicesScreen = ({ route }) => {

    const [ devices, setDevices ] = useState([]);


    useEffect(() => {
        setDevices([
            {
                id: 1,
                name: 'Device 1',
            },
            {
                id: 2,
                name: 'Device 2',
            },
            {
                id: 3,
                name: 'Device 3',
            },
            {
                id: 4,
                name: 'Device 4',
            },
            {
                id: 5,
                name: 'Device 5',
            }
        ])
    },[])

    const { roomName } = route.params;
    console.log(roomName);
    return (
        <SafeAreaView style={CommonStyles.wrapper}>
            <View style={CommonStyles.container}>
                <Text style={CommonStyles.title}>{roomName}</Text>
                <View style={CommonStyles.listContainer}>
                    <FlatList
                        style={{'width': '100%'}}
                        data={ devices || []}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Device
                                name={item.name}
                            />
                        )}
                        ListEmptyComponent={<Text>No Bulbs Yet for this Room</Text>}
                    />
                    <TouchableOpacity style={CommonStyles.itemButton} onPress={onPress}>
                        <Icon name="add" size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default DevicesScreen;