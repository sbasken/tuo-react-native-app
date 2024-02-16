import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

export const StartUpScreen = ({ isLoggedIn, setIsLoggedIn }) => {
    const navigation = useNavigation();

    const handleSignIn = () => {
        setIsLoggedIn((isLoggedIn) => !isLoggedIn);
        console.log('Logged In')
        navigation.navigate('MyTabs');
    };

    return (
        <>
            <View style={styles.container}>
                <Image 
                source={require('../../assets/logo.png')}
                style={{width: 230, height: 200}}
                resizeMode="contain"
                />
                {/* <Text style={styles.title}>Your Circadian Healthy Life Starts Here</Text> */}
                <Button
                    title="Sign In"
                    color="#7d55c7"
                    onPress={handleSignIn}
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

 