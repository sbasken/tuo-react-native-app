import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StartUpScreen } from './src/screens/StartUpScreen';
import 'react-native-gesture-handler';
import MyTabs from './src/navigation/MyTabs';
import { SafeAreaView, Button } from 'react-native';
import { CommonStyles } from './src/styles/CommonStyles';
import MyDrawer from './src/navigation/MyDrawer';

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
          {isLoggedIn ? (<>
            <MyDrawer />
            <Stack.Screen name="MyTabs" component={MyTabs} />
          </>
          ) : (
            // <Stack.Screen name="StartUp">
            //   {() => <StartUpScreen setIsLoggedIn={setIsLoggedIn} />}
            // </Stack.Screen>
            <Stack.Screen
              name="MainApp"
              component={MyDrawer}
              options={({ navigation }) => ({
                headerRight: () => (
                  <Button
                    onPress={() => navigation.toggleDrawer()}
                    title="Settings"
                  />
                ),
                headerShown: false, // Show header if you want the settings button to be visible
            })}
          />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    
  );
}