/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {mapping, light as lightTheme} from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {StatusBar, Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {navigationRef} from './RootNavigation';
import {Root, View} from 'native-base';
import Toast from 'react-native-toast-message';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import Book from './src/views/book';
import Profile from './src/views/UpdateProfile';
import {store} from './src/redux/store';
import Routes from './routes';
import CustomTextInput from './src/components/CustomTextInput';
import Home from './src/views/home';
import UpdateProfile from './src/views/UpdateProfile';
import {Provider as AppProvider} from 'react-redux';
import BonusHistory from './src/views/BonusHistory';
import WithdrawHistory from './src/views/WithdrawHistory';

const App = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  let [fontsLoaded] = useFonts({
    'OpenSans-Light': require('./src/assets/font/ProductSans-Light.otf'),
    'OpenSans-Bold': require('./src/assets/font/ProductSans-Bold.otf'),
    'OpenSans-Medium': require('./src/assets/font/ProductSans-Medium.otf'),
    'OpenSans-Regular': require('./src/assets/font/ProductSans-Regular.otf'),
    'Gotham-Bold': require('./src/assets/font/Gotham-Bold.otf'),
    'Gotham-Book': require('./src/assets/font/GothamBook.ttf'),
    'Gotham-Light': require('./src/assets/font/Gotham-Light.otf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <AppProvider store={store}>
        <Root>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="light-content"
          />
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider mapping={mapping} theme={lightTheme}>
            <NavigationContainer ref={navigationRef}>
              <BonusHistory />
            </NavigationContainer>
            <Toast ref={(ref) => Toast.setRef(ref)} />
          </ApplicationProvider>
        </Root>
      </AppProvider>
    );
  }
};

export default App;
