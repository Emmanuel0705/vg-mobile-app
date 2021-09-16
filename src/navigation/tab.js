import * as React from 'react';
import {SafeAreaView, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import Home from '../views/home';

const BottomTab = createBottomTabNavigator();

const BottomTabBar = ({navigation, state}) => {
  const onSelect = (index) => {
    navigation.navigate(state.routeNames[index]);
  };

  const PersonIcon = () => (
    <Image source={require('../assets/images/accounticon.png')} />
  );

  const ClipIcon = () => (
    <Image source={require('../assets/images/withdraw.png')} />
  );

  const EmailIcon = () => (
    <Image source={require('../assets/images/withdraw.png')} />
  );

  const HomeIcon = () => (
    <Image source={require('../assets/images/homeicon.png')} />
  );

  return (
    <SafeAreaView>
      <BottomNavigation selectedIndex={state.index} onSelect={onSelect}>
        <BottomNavigationTab title="Home" icon={HomeIcon} />
        <BottomNavigationTab title="Wallet" icon={ClipIcon} />
        <BottomNavigationTab title="Orders" icon={EmailIcon} />
        <BottomNavigationTab title="Profile" icon={PersonIcon} />
      </BottomNavigation>
    </SafeAreaView>
  );
};

const TabNavigator = () => (
  <BottomTab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <BottomTab.Screen name="Home" component={Home} />
    <BottomTab.Screen name="Farms" component={Home} />
    <BottomTab.Screen name="Investments" component={Home} />
    <BottomTab.Screen name="Profile" component={Home} />
  </BottomTab.Navigator>
);

export default TabNavigator;
