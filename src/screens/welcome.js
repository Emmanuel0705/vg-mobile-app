import React, {Component} from 'react';
import {View, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Text, Button} from '@ui-kitten/components';

import style from '../assets/style';

const slides = [
  {
    key: 3,
    title: 'Flexible Payment Options',
    text: 'Our platform offers flexible payment options',
    image: require('../assets/images/logo.png'),
    backgroundColor: '#fff',
  },
  {
    key: 1,
    title: 'Secure door to door delivery',
    text: 'We ensure that every delivery is accounted for',
    image: require('../assets/images/logo.png'),
    backgroundColor: '#fff',
  },
  {
    key: 2,
    title: 'Online Tracking',
    text: 'Easily track your parcel, and know the current location',
    image: require('../assets/images/logo.png'),
    backgroundColor: '#fff',
  },
];
const Welcome = (props) => {
  const _renderItem = ({item}) => {
    return (
      <View
        style={[style.fullHeight, style.whiteBackground, style.displayFlex]}>
        <Image
          source={item.image}
          style={[style.responsiveImage, style.fullHeight]}
        />
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View>
        <Button
          style={[
            style.authButton,
            style.primaryBackground,
            style.regularFont,
            style.noBorder,
          ]}
          onPress={() => props.navigation.navigate('Login')}>
          {(evaProps) => (
            <Text {...evaProps} style={[style.boldFont, style.colorWhite]}>
              Login
            </Text>
          )}
        </Button>
        <Button
          style={[
            style.whiteBackground,
            style.regularFont,
            style.noBorder,
            style.sm_margin,
          ]}
          onPress={() => props.navigation.navigate('Register')}>
          {(evaProps) => (
            <Text {...evaProps} style={[style.boldFont]}>
              Sign up
            </Text>
          )}
        </Button>
      </View>
    );
  };

  const _renderNextButton = () => {
    return (
      <View>
        <Button
          style={[
            style.authButton,
            style.primaryBackground,
            style.regularFont,
            style.noBorder,
          ]}
          onPress={() => props.navigation.navigate('Login')}>
          {(evaProps) => (
            <Text {...evaProps} style={[style.boldFont, style.colorWhite]}>
              Login
            </Text>
          )}
        </Button>
        <Button
          style={[
            style.grayBg,
            style.regularFont,
            style.noBorder,
            style.sm_margin,
          ]}
          onPress={() => props.navigation.navigate('Register')}>
          {(evaProps) => (
            <Text {...evaProps} style={[style.boldFont]}>
              Sign up
            </Text>
          )}
        </Button>
      </View>
    );
  };
  const _onDone = () => {
    props.navigation.navigate('Login');
  };
  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      activeDotStyle={style.primaryBackground}
      dotStyle={style.whiteBackground}
      renderNextButton={_renderNextButton}
      renderDoneButton={_renderDoneButton}
      bottomButton={true}
      keyExtractor={(item) => item.key.toString()}
    />
  );
};

export default Welcome;
