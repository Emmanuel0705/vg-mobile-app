import * as React from 'react';
import {useWindowDimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../views/home';
import Wallet from '../views/wallet';
import Tracker from '../views/track_packages';
import Profile from '../views/profile';
import Settings from '../views/settings';
import Messages from '../views/messages';
import Book from '../views/book';
import Referrals from '../views/referrals';
import Complaint from '../views/complaint';
import Coupon from '../views/coupon';
import Ion from 'react-native-vector-icons/FontAwesome5';
import CustomDrawerContent from '../components/custom_drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UpdateProfile from '../views/UpdateProfile';
import ProfileEdit from '../views/profile_edit';
import Payment from '../views/payment';
import ResetPassword from '../views/password';

const Drawer = createDrawerNavigator();
const DrawerNav = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={CustomDrawerContent}
      drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
      drawerStyle={{backgroundColor: '#fff'}}
      drawerContentOptions={{
        activeTintColor: '#000',
        inactiveTintColor: '#000',
        itemStyle: {marginVertical: 10},
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon name="home" size={size} color={focused ? '#7cc' : '#ccc'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Wallet"
        component={Wallet}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon name="wallet" size={size} color={focused ? '#7cc' : '#ccc'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Referrals"
        component={Referrals}
        options={{
          drawerIcon: ({focused, size}) => (
            <Ion name="wallet" size={size} color={focused ? '#7cc' : '#ccc'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={UpdateProfile}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name="account"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Home}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon name="cog" size={size} color={focused ? '#7cc' : '#ccc'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Support"
        component={Home}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon name="phone" size={size} color={focused ? '#7cc' : '#ccc'} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
