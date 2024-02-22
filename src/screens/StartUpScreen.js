import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
import UserContext from '../contexts/UserContext';

export const StartUpScreen = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
    const navigation = useNavigation();

    const handleSignIn = () => {
        // setIsLoggedIn((isLoggedIn) => !isLoggedIn);
        console.log('Nagivating to sign in page')
        navigation.navigate('Auth', { screen: 'SignIn' });
    };

    const handleSignUp = () => {
        setIsLoggedIn();
        console.log('Signing up...')
        navigation.navigate('SignUp');
    };

    return (
        <>
            <View style={styles.container}>
                <Image 
                source={require('../../assets/logo.png')}
                style={{ width: 150, height: 150 }}
                resizeMode="contain"
                />
                {/* <Button
                    title="Sign In"
                    color="#7d55c7"
                    onPress={handleSignIn}
                /> */}
            </View>
            <View style={styles.fixToText}>
                <Button
                    title="Sign In"
                    color="#7d55c7"
                    onPress={handleSignIn}
                />
                <Button
                    title="Sign Up"
                    color="#7d55c7"
                    onPress={handleSignUp}
                />
            </View>
      </>
    );
  };

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

 