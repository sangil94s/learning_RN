import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreens from '../../HomeScreens';
import Sap from '../screens/Sap';

const Tab = createBottomTabNavigator();

export default function Footer() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreens" component={HomeScreens} />
      <Tab.Screen name="삽질 페이지" component={Sap} />
    </Tab.Navigator>
  );
}
