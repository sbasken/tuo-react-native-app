import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DevicesScreen from '../screens/DevicesScreen';
import Device from '../components/Device';

const Stack = createNativeStackNavigator();

function RoomStack() {
  return (
    <Stack.Navigator
        screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Rooms" component={HomeScreen}  headerShown={false}/>
      <Stack.Screen name="Devices" component={DevicesScreen} />
      <Stack.Screen name="Device" component={Device} />
    </Stack.Navigator>
  );
}

export default RoomStack;