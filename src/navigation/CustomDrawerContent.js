import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import MyTabs from './MyTabs';
import { StartUpScreen } from '../screens/StartUpScreen';
import UserContext from '../contexts/UserContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function CustomDrawerContent(props) {
  const { setIsLoggedIn } = useContext(UserContext);

  const handleLogOut = () => {
    setIsLoggedIn(false);
    props.navigation.navigate('StartUpScreen');
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <TouchableOpacity style={styles.item} onPress={handleLogOut}>
        <Icon name="logout" style={styles.icon} />
        <Text style={styles.label}>Log Out</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingLeft: 20,
        paddingRight: 20,
      },
      icon: {
        fontSize: 24,
        color: 'grey', 
        width: 32,
      },
      label: {
        fontSize: 14,
        color: 'grey',
        marginLeft: 32,
        fontWeight: 'bold',
      },
})