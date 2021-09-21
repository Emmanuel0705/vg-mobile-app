import React, {Component, useEffect, useState} from 'react';
import {View, ScrollView, Dimensions, KeyboardAvoidingView} from 'react-native';
import {Layout, Text, Button} from '@ui-kitten/components';
import TextInput from 'react-native-textinput-with-icons';
import {SliderBox} from 'react-native-image-slider-box';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

import style from '../assets/style';
import {Loader} from '../components/loader';
import {_storeData} from '../services/asyncStorage';
import {useDispatch} from 'react-redux';
import {loginUser} from '../services/user';
import {storeUser} from '../redux/actions/user.action';
import {useSelector} from 'react-redux';
const screenWidth = Dimensions.get('window').width - 50;
const axios = require('axios');

const Login = (props) => {
  const user = useSelector((store) => store.user).data;
  const [showLoader, setShowLoader] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [images, setImages] = useState([
    require('../assets/images/Civic_Center.jpg'),
    require('../assets/images/bridge.jpg'),
    require('../assets/images/lagos_nigeria.jpg'),
  ]);
  useEffect(() => {
    setShowLoader(false);
  }, []);
  const handleSubmit = async () => {
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text2: 'Please fill all empty fields',
        visibilityTime: 4000,
        position: 'bottom',
      });
      return;
    }
    setShowLoader(true);
    let payload = {
      email: email,
      password: password,
    };
    const res = await loginUser(payload);
    setShowLoader(false);
    if (!res.success) {
      Toast.show({
        type: 'error',
        text2: res.message,
        visibilityTime: 4000,
        position: 'bottom',
      });
      return;
    }
    dispatch(storeUser({...user, ...res.user}));
  };

  return (
    <Layout style={[style.fullHeight, style.lighterBackground]}>
      <Loader visible={showLoader} />
      <SliderBox images={images} sliderBoxHeight={400} autoplay circleLoop />
      <ScrollView>
        <KeyboardAvoidingView>
          <View
            style={[
              style.authContainer,
              style.lighterBackground,
              style.fullHeight,
            ]}>
            <Text
              category="h6"
              style={[style.authText, style.colorPrimary, style.boldFont]}>
              Welcome Back
            </Text>
            <TextInput
              label="Email"
              leftIcon="email"
              leftIconSize={20}
              leftIconType="material"
              leftIconColor="#218BAC"
              rippleColor="#072956"
              fontFamily="Gotham-Book"
              underlineColor="#000"
              containerMaxWidth={screenWidth}
              underlineActiveColor="#000"
              labelActiveColor="#218BAC"
              containerWidth={screenWidth}
              autoCapitalise={false}
              value={email}
              onChangeText={(email) => setEmail(email)}
            />
            <TextInput
              label="Password"
              leftIcon="lock"
              leftIconType="material"
              leftIconColor="#218BAC"
              leftIconSize={20}
              fontFamily="Gotham-Book"
              containerMaxWidth={screenWidth}
              containerWidth={screenWidth}
              labelActiveColor="#218BAC"
              underlineColor="#000"
              value={password}
              onChangeText={(password) => setPassword(password)}
              secureTextEntry={secureTextEntry}
            />
            <Text category="p2" style={[style.regularFont, style.textRight]}>
              Forgot your password?
            </Text>
            <Button
              style={[
                style.authroundedButton,
                style.primaryBackground,
                style.regularFont,
                style.noBorder,
                style.packageView,
              ]}
              size="medium"
              onPress={() => handleSubmit()}>
              {(evaProps) => (
                <Text
                  category="h6"
                  {...evaProps}
                  style={[style.boldFont, style.colorWhite]}>
                  Sign in
                </Text>
              )}
            </Button>
            {/* <SocialIcon
              title="Sign In With Google"
              button
              type="google"
              fontWeight="light"
              light
            /> */}
            <View
              style={[
                style.displayFlex,
                style.flexRow,
                style.createAccount,
                style.sm_margin,
              ]}>
              <Text ctaegory="p2" style={style.regularFont}>
                Don't have an account?
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Register')}>
                <Text style={[style.regularFont, style.colorPrimary]}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </Layout>
  );
};
export default Login;
