import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../screens/auth/AuthScreen';


const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
        screenOptions={{ headerShown: false }}
    >
      <Stack.Screen 
        name="SignIn" 
        component={AuthScreen} 
        initialParams={{ mode: 'signIn' }}
      />
      <Stack.Screen 
        name="SignUp" 
        component={AuthScreen} 
        initialParams={{ mode: 'signUp' }}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;