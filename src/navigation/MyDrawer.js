import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import MyTabs from './MyTabs';
import { ProfileScreen } from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home from MyDrawer" component={MyTabs} />
      <Drawer.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{title: 'Account Settings'}} 
      />
    </Drawer.Navigator>
  );
}