import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../screens/welcome';
import Login from '../screens/login';
import Register from '../screens/register';
import Dashboard from '../screens/dashboard';
import Wallet from '../views/wallet';
import Book from '../views/book';
import ProfileEdit from '../views/profile_edit';
import Payment from '../views/payment';
import Password from '../views/password';
import Referrals from '../views/referrals';
import {useDispatch, useSelector} from 'react-redux';

const Stack = createStackNavigator();

const StackNav = () => {
  const user = useSelector((store) => store.user).data;
  return (
    <>
      {user._id ? (
        <Stack.Navigator
          initialRouteName="Dashboard"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Referrals" component={Referrals} />
          <Stack.Screen name="Wallet" component={Wallet} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      )}
    </>
  );
};
export default StackNav;
