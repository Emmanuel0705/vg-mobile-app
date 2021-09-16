import React, {Component} from 'react';
import {View, ToastAndroid, Image} from 'react-native';
import {Text, Button, Card, Input} from '@ui-kitten/components';

import style from '../assets/style';
import Header from '../components/header';

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      secureTextEntry: true,
      loading: false,
    };
  }

  submit = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Wallet Funded',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={[style.fullHeight, style.primaryBackground]}>
        <View style={style.dashboardContainer}>
          <Header navigation={this.props.navigation} title="Wallet" stacknav />
        </View>
        <Card
          style={[
            style.roundededges,
            style.walletContainer,
            style.displayFlex,
            style.center,
            style.transparentBg,
          ]}>
          <Text
            category="h4"
            style={[style.regularFont, style.colorWhite, style.textCenter]}>
            Fund Wallet
          </Text>
        </Card>

        <Card style={[style.fullHeight]}>
          <View>
            <Input
              textStyle={{height: 40}}
              label={(evaProps) => (
                <Text
                  category="p1"
                  {...evaProps}
                  style={[style.boldFont, style.label, style.colorLight]}>
                  Card Number
                </Text>
              )}
              style={[style.input, style.boxWithShadow]}
            />
          </View>
          <View>
            <Input
              textStyle={{height: 40}}
              label={(evaProps) => (
                <Text
                  category="p1"
                  {...evaProps}
                  style={[style.boldFont, style.label, style.colorLight]}>
                  CCV
                </Text>
              )}
              style={[style.input, style.boxWithShadow]}
            />
          </View>
          <View>
            <Input
              textStyle={{height: 40}}
              label={(evaProps) => (
                <Text
                  category="p1"
                  {...evaProps}
                  style={[style.boldFont, style.label, style.colorLight]}>
                  Expiry Date(MM/YY)
                </Text>
              )}
              style={[style.input, style.boxWithShadow]}
            />
          </View>
          <Button
            size="large"
            style={[
              style.sm_margin,
              style.primaryBackground,
              style.regularFont,
              style.noBorder,
            ]}
            onPress={() => this.submit()}>
            {(evaProps) => (
              <Text {...evaProps} style={[style.regularFont, style.colorWhite]}>
                SUBMIT
              </Text>
            )}
          </Button>
          <Image
            source={require('../assets/images/paystack.png')}
            style={[style.responsiveImage, style.sm_margin]}
          />
        </Card>
      </View>
    );
  }
}
