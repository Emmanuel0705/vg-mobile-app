import React, {Component} from 'react';
import {View, ToastAndroid} from 'react-native';
import {Text, Button, Card, Input} from '@ui-kitten/components';
import style from '../assets/style';
import Modal from '../components/modal';
import Header from '../components/header';

export default class Coupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      secureTextEntry: true,
      loading: false,
      modalVisible: false,
    };
  }

  submit = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Complain submitted, a feedback would be sent',
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
          <Header
            navigation={this.props.navigation}
            title="Promotions"
            stacknav
          />
        </View>
        <View style={style.fullHeight}>
          <Card style={[style.fullHeight]}>
            <View>
              <Input
                textStyle={{height: 40}}
                label={(evaProps) => (
                  <Text
                    category="p1"
                    {...evaProps}
                    style={[style.boldFont, style.label, style.colorLight]}>
                    Enter Promo Code
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
              onPress={() =>
                this.setState({modalVisible: !this.state.modalVisible})
              }>
              {(evaProps) => (
                <Text
                  {...evaProps}
                  style={[style.regularFont, style.colorWhite]}>
                  Apply Code
                </Text>
              )}
            </Button>
          </Card>
        </View>
        <Modal
          isModalVisible={this.state.modalVisible}
          body={
            <>
              <View style={[style.displayFlex, style.center]}>
                <Text category="h6">😎</Text>
                <Text category="p1" style={style.openSansRegular}>
                  Promo code applied
                </Text>
                <Text category="p2" style={style.openSansRegular}>
                  You get N500 discount from your next Booking
                </Text>
                <Button
                  style={[
                    style.sm_margin,
                    style.primaryBackground,
                    style.openSansRegular,
                    style.noBorder,
                  ]}
                  onPress={() => {
                    this.setState({modalVisible: !this.state.modalVisible});
                  }}>
                  Close
                </Button>
              </View>
            </>
          }
        />
      </View>
    );
  }
}
