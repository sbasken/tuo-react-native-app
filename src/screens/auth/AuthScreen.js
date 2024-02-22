import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import UserContext from '../../contexts/UserContext';
// import { Formik } from 'formik';

export default function AuthScreen ({ route }) {
    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
    const [ loginFormData, setLoginFormData ] = useState({
      login_email: "",
      login_password: ""
    });

    const { login_email, login_password } = loginFormData;

    const mode = route.params.mode;

    const handleLoginFormChange = () => {

    }

    function handleLogin() {
    //   fetch('http://127.0.0.1:5555/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       email: login_email,
    //       password: login_password,
    //     }),
    //   })
    //     .then((res) => {
    //       if (res.ok) {
    //         res.json().then((user) => {
    //           setIsLoggedIn(user);
    //           fetch(`http://127.0.0.1:5555/users/${user.id}/parties`)
    //       .then((res) => res.json())
    //       .then((parties) => {
    //         setLoggedInParties(parties);
    //       });
    //         });
    //       }
    //     })
    //     .catch((error) => {
    //       alert('Username or password incorrect, try again')
    //       console.error(error);
    //     });
    }

    function handleSignup() {
    //   fetch('http://127.0.0.1:5555/signup', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       email: signup_email,
    //       password: signup_password,
    //       username: signup_username,
    //     }),
    //   })
    //     .then((res) => {
    //       if (res.ok) {
    //         res.json().then((user) => {
    //           setIsLoggedIn(user);
    //           fetch(`http://127.0.0.1:5555/users/${user.id}/parties`)
    //       .then((res) => res.json())
    //       .then((parties) => {
    //         setLoggedInParties(parties);
    //       });
    //         });
    //       }
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    }
    

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.container}>
                <Image 
                source={require('../../../assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
                />
            </View>
          { mode === 'signUp' ?
           <TextInput
             style={{ height: 40, 
                width: '80%', 
                borderColor: 'gray', 
                borderWidth: 1, 
                marginTop: 0,
                borderRadius: 5 }}
            placeholder="Email"
            autoCapitalize="none"
            // onChangeText={(text) => setSignupEmail(text)}
            // value={signup_email}
          />
          :
          <TextInput
            style={styles.placeholder}
            placeholder="Email"
            // autoCapitalize="none"
            // onChangeText={(text) => setLoginEmail(text)}
            value={login_email}
          />}
          { mode === 'signUp' ? 
          <TextInput
            style={styles.placeholder}
            placeholder="Password"
            secureTextEntry={true}
          // onChangeText={(text) => setSignupPassword(text)}
          // value={signup_password}
        /> 
        :
          <TextInput
            style={styles.placeholder}
            placeholder="Password"
            secureTextEntry={true}
            // onChangeText={(text) => setLoginPassword(text)}
            value={login_password}
          />}

        { mode === 'signUp'  ? 
          <TextInput
            style={styles.placeholder}
            placeholder="Username"
          // onChangeText={(text) => setSignupUsername(text)}
          // value={signup_username}
          // autoCapitalize="none"
        /> 
        :
          null
          }

          { mode === 'signUp'  ? 
          <TouchableOpacity onPress={handleSignup} style={{ 
            backgroundColor: '#2EC4B6', 
            padding: 10, 
            marginTop: 20,
            borderRadius: 5  }}>
            <Text style={{ color: 'white' }}>Signup</Text>
          </TouchableOpacity>
          : 
          <TouchableOpacity onPress={handleLogin} style={{ 
            backgroundColor: '#7d55c7', 
            padding: 10, 
            marginTop: 20,
            borderRadius: 5  }}>
            <Text style={{ color: 'white' }}>Sign In</Text>
          </TouchableOpacity>}

          

          <TouchableOpacity 
          style={{ marginTop: 20,
        }}
        onPress={() => {handleSignup; setSignup(!signup)}}
          >
           { mode === 'signUp' ? 
            <Text>Login instead?</Text>
           :  
           <Text>Don't have an account? Sign up here.</Text>}
          </TouchableOpacity>
        </View>
      );
    }

const styles = StyleSheet.create({
  placeholder: {
    height: 40, 
    width: '80%', 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginTop: 10,
    borderRadius: 5,
    paddingLeft: 10,
  },
  logo: {
    width: 130, 
    height: 130,
    marginBottom: 20,
  }

})
