import React, { useState, useEffect } from "react";
import { Text, View,TouchableOpacity, onPress, SafeAreaView, FlatList, StatusBar } from "react-native";
import { CommonStyles } from "../styles/CommonStyles";
import Room from "../components/Room";
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
    const [ rooms, setRooms ] = useState([]);


    useEffect(() => {
        setRooms([
            {
                id: 1,
                name: 'Living Room',
                isOn: true
            },
            {
                id: 2,
                name: 'Kitchen',
                isOn: false
            },
            {
                id: 3,
                name: 'Bedroom',
                isOn: false
            },
            {
                id: 4,
                name: 'Bathroom',
                isOn: false
            },
            {
                id: 5,
                name: 'Dining Room',
                isOn: false
            },
            {
                id: 6,
                name: 'Office',
                isOn: false
            },
        ])
    },[])

    return (
        <SafeAreaView style={CommonStyles.wrapper}>
            <View style={CommonStyles.container}>
                <Text style={CommonStyles.title}>Rooms</Text>
                <View style={CommonStyles.listContainer}>
                <FlatList
                        style={{'width': '100%'}}
                        data={ rooms || []}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Room
                                name={item.name}
                                onPress={() => navigation.navigate('Devices')}
                            />
                        )}
                        ListEmptyComponent={<><Text>No Rooms Yet. </Text><Text>Wanna add a room to your account?</Text></>}
                    />
                    {/* { rooms?.map((room) => {
                        return <Room key={room.id} name={room.name} isOn={room.isOn} onPress={() => navigation.navigate('Devices')}/>
                    })} */}
                    <TouchableOpacity style={CommonStyles.itemButton} onPress={onPress}>
                        <Icon name="add" size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
        
}

export default HomeScreen;