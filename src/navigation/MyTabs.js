import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddBulbScreen from '../screens/AddBulbScreen';
import PlanScreen from '../screens/PlanScreen';
import RoomStack from './RoomStack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false
      }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let IconComponent;

          if (route.name === "Home") {
            iconName = 'home';
            IconComponent = Icon;
          } else if (route.name === "Add Bulb") {
            iconName = 'lightbulb-o';
            IconComponent = Icon;
          } else if (route.name === "Plan") {
            iconName = 'clock';
            IconComponent = Feather;
          }
      
          return <IconComponent name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#7D55C7',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarStyle: [{ display: 'flex' }],
      })}
    >
      <Tab.Screen name="Home" headerShown={false} component={RoomStack} />
      <Tab.Screen name="Add Bulb" component={AddBulbScreen} />
      <Tab.Screen name="Plan" component={PlanScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;