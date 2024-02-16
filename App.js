import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StartUpScreen } from './src/screens/StartUpScreen';
import 'react-native-gesture-handler';
import MyTabs from './src/navigation/MyTabs';
import { SafeAreaView, View } from 'react-native';
import { CommonStyles } from './src/styles/CommonStyles';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {

  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  return (
    <SafeAreaView style={CommonStyles.wrapper}>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerShown: false
          }}
        >
          {isLoggedIn ? (
          <Stack.Screen name="MyTabs" component={MyTabs} />
          ) : (
            <Stack.Screen name="StartUp">
              {() => <StartUpScreen setIsLoggedIn={setIsLoggedIn} />}
            </Stack.Screen>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    
  );
}