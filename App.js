import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Image 
          source={require('./assets/logo.png')}
          style={{width: 200, height: 200}}
          resizeMode="contain"
        />
        <Text>Your Circadian Healthy Life Starts Here</Text>
        <View style={styles.fixToText}>
          <Button
            title="Left button"
            color="#7d55c7"
            onPress={() => Alert.alert('Left button pressed')}
          />
          <Button
            title="Right button"
            color="#7d55c7"
            onPress={() => Alert.alert('Right button pressed')}
          />
        </View>
        
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#7d55c7',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
