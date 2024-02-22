import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { SafeAreaView, Button } from 'react-native';
import { CommonStyles } from './src/styles/CommonStyles';
import MyDrawer from './src/navigation/MyDrawer';
import UserContext
 from './src/contexts/UserContext';
import { StartUpScreen } from './src/screens/StartUpScreen';
import AuthStack from './src/navigation/AuthStack';


const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("isLoggedIn", isLoggedIn); 

  return (
    <SafeAreaView style={CommonStyles.wrapper}>
      <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <NavigationContainer>
          <Stack.Navigator 
            screenOptions={{
              headerShown: false
            }}
          >
            {isLoggedIn ? (
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
                headerShown: false
            })}
        />
            ) : (
              <>
                <Stack.Screen
                  name="StartUp"
                  component={StartUpScreen}
                />
                <Stack.Screen
                  name="Auth"
                  component={AuthStack}
                  options={{ headerShown: false }}
                />
              </>

            )}
          </Stack.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    </SafeAreaView>
  );
}