import React, {Component, useState} from 'react';
import {View} from 'react-native';
import {Layout, Text, Input, Button} from '@ui-kitten/components';
import Toast from 'react-native-toast-message';
import {ScrollView} from 'react-native-gesture-handler';

import style from '../assets/style';
import {Loader} from '../components/loader';
import {_storeData} from '../services/asyncStorage';
import {registerUser} from '../services/user';
import {useDispatch, useSelector} from 'react-redux';
import {storeUser} from '../redux/actions/user.action';
const axios = require('axios');

const Register = (props) => {
  const user = useSelector((store) => store.user).data;
  const dispatch = useDispatch();
  const [showLoader, setShowLoader] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    sponsorId: '',
  });

  const handleSubmit = async () => {
    let error = false;
    let message;
    Object.keys(formData).forEach((el) => {
      if (!formData[el]) error = true;
    });

    if (formData.password !== formData.confirmPassword) {
      error = true;
      message = 'password mismatch';
    }

    if (error) {
      Toast.show({
        type: 'error',
        text2: message || 'Please fill all empty fields',
        visibilityTime: 4000,
        position: 'bottom',
      });
      return;
    }
    setShowLoader(true);
    let payload = {
      email: formData.email,
      name: `${formData.firstName} ${formData.lastName}`,
      phone: formData.phoneNumber,
      password: formData.password,
      sponsorId: formData.sponsorId,
    };
    const res = await registerUser(payload);
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
    <Layout style={[style.authContainer, style.fullHeight]}>
      <Loader visible={showLoader} />
      <View>
        <Text
          category="h1"
          style={[style.authText, style.colorPrimary, style.boldFont]}>
          Create Account
        </Text>
      </View>
      <ScrollView>
        <View style={style.authView}>
          <Input
            placeholder="First name"
            style={[style.input, style.fullWidth]}
            value={formData.firstName}
            onChangeText={(text) => setFormData({...formData, firstName: text})}
          />
          <Input
            placeholder="Last name"
            style={[style.input, style.fullWidth]}
            value={formData.lastName}
            onChangeText={(text) => setFormData({...formData, lastName: text})}
          />
          <Input
            placeholder="Email"
            style={style.input}
            value={formData.email}
            keyboardType="email-address"
            onChangeText={(text) => setFormData({...formData, email: text})}
            autoCapitalize={false}
          />
          <Input
            placeholder="Phone number"
            style={style.input}
            value={formData.phoneNumber}
            onChangeText={(text) =>
              setFormData({...formData, phoneNumber: text})
            }
            keyboardType="phone-pad"
          />
          <Input
            placeholder="Password"
            value={formData.password}
            onChangeText={(text) => setFormData({...formData, password: text})}
            secureTextEntry
            style={style.input}
            autoCapitalize={false}
          />
          <Input
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChangeText={(text) =>
              setFormData({...formData, confirmPassword: text})
            }
            secureTextEntry
            style={style.input}
            autoCapitalize={false}
          />
          <Input
            placeholder="Sponsor ID"
            value={formData.sponsorId}
            style={style.input}
            onChangeText={(text) => setFormData({...formData, sponsorId: text})}
          />
          <Button
            style={[
              style.authButton,
              style.primaryBackground,
              style.regularFont,
              style.noBorder,
            ]}
            onPress={() => handleSubmit()}>
            {(evaProps) => (
              <Text
                category="h5"
                {...evaProps}
                style={[style.boldFont, style.colorWhite]}>
                Sign up
              </Text>
            )}
          </Button>
        </View>
      </ScrollView>
    </Layout>
  );
};
export default Register;
