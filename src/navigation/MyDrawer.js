import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import MyTabs from './MyTabs';
import Feather from 'react-native-vector-icons/Feather';
import CustomDrawerContent from './CustomDrawerContent'

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="TUO" component={MyTabs} />
      <Drawer.Screen 
        options={{
          title: 'Account Settings',
          drawerIcon: ({focused, size}) => (
            <Feather name="settings" size={size} color={focused ? '#007bff' : 'grey'} />
          ),
        }} 
        name="Settings" 
        component={SettingsScreen} 
      />
      {/* No need for a Log Out Drawer.Screen */}
    </Drawer.Navigator>
  );
}
