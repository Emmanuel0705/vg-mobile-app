import React, {Component} from 'react';
import {View, ImageBackground, Image} from 'react-native';
import {Text, Input, Button, Card} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import style from '../assets/style';
import Header from '../components/header';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      secureTextEntry: true,
      loading: false,
    };
  }

  render() {
    return (
      <View style={[style.fullHeight, style.primaryBackground]}>
        <View style={style.dashboardContainer}>
          <Header navigation={this.props.navigation} title="My Profile" />
        </View>
        <Card
          style={[
            style.roundededges,
            style.walletContainer,
            style.displayFlex,
            style.center,
            style.transparentBg,
          ]}>
          <Image source={require('../assets/images/profile-big.png')} />
          <Text
            category="h4"
            style={[style.regularFont, style.colorWhite, style.textCenter]}>
            John Doe
          </Text>
          <Button
            status="success"
            size="small"
            style={style.sm_margin}
            onPress={() => this.props.navigation.navigate('ProfileEdit')}>
            {(evaProps) => (
              <Text
                {...evaProps}
                style={[style.regularFont, style.colorWhite, style.textCenter]}>
                Edit
              </Text>
            )}
          </Button>
        </Card>
        <Card style={[style.fullHeight]}>
          <View style={style.authView}>
            <View style={[style.displayFlex, style.flexRow, style.sm_margin]}>
              <View style={[style.buttonCircle]}>
                <Icon
                  name="email-mark-as-unread"
                  size={20}
                  color="#fff"
                  style={[style.centeredImage, style.sm_margin]}
                />
              </View>
              <View>
                <Text
                  category="h6"
                  style={[style.boldFont, style.colorPrimary]}>
                  Email Address
                </Text>
                <Text category="p1" style={style.boldFont}>
                  john.doe@gmail.com
                </Text>
              </View>
            </View>
          </View>
          <View style={style.authView}>
            <View style={[style.displayFlex, style.flexRow, style.sm_margin]}>
              <View style={[style.buttonCircle]}>
                <Icon
                  name="phone"
                  size={20}
                  color="white"
                  style={[style.centeredImage, style.sm_margin]}
                />
              </View>
              <View>
                <Text
                  category="h6"
                  style={[style.boldFont, style.colorPrimary]}>
                  Phone Number
                </Text>
                <Text category="p1" style={style.boldFont}>
                  +2348177918
                </Text>
              </View>
            </View>
          </View>
          <View style={style.authView}>
            <View style={[style.displayFlex, style.flexRow, style.sm_margin]}>
              <View style={[style.buttonCircle]}>
                <Icon
                  name="map-marker-radius"
                  size={20}
                  color="white"
                  style={[style.centeredImage, style.sm_margin]}
                />
              </View>
              <View>
                <Text
                  category="h6"
                  style={[style.boldFont, style.colorPrimary]}>
                  Address
                </Text>
                <Text category="p1" style={style.boldFont}>
                  14, Shaw Road Ikoyi, Lagos
                </Text>
              </View>
            </View>
          </View>
        </Card>
      </View>
    );
  }
}
