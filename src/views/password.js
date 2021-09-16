import React, {Component} from 'react';
import {View, ToastAndroid, TouchableWithoutFeedback} from 'react-native';
import {Text, Button, Card, Input} from '@ui-kitten/components';
import style from '../assets/style';
import Header from '../components/header';
import Icon from 'react-native-vector-icons/Octicons';

export default class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      secureTextEntry: true,
      loading: false,
    };
  }

  toggleSecureEntry = () => {
    this.setState({secureTextEntry: !this.state.secureTextEntry});
  };

  renderIcon = () => (
    <TouchableWithoutFeedback onPress={this.toggleSecureEntry}>
      <Icon
        {...this.props}
        name={this.state.secureTextEntry ? 'eye-closed' : 'eye'}
      />
    </TouchableWithoutFeedback>
  );

  submit = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Password successfully Updated',
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
            title="Settings"
            stacknav
          />
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
            category="h6"
            style={[style.regularFont, style.colorWhite, style.textCenter]}>
            Change Password
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
                  Email Address
                </Text>
              )}
              style={[style.input, style.boxWithShadow]}
            />
          </View>
          <View>
            <Input
              secureTextEntry={this.state.secureTextEntry}
              accessoryRight={this.renderIcon}
              textStyle={{height: 40}}
              label={(evaProps) => (
                <Text
                  category="p1"
                  {...evaProps}
                  style={[style.boldFont, style.label, style.colorLight]}>
                  New Password
                </Text>
              )}
              style={[style.input, style.boxWithShadow]}
            />
          </View>
          <View>
            <Input
              secureTextEntry={this.state.secureTextEntry}
              accessoryRight={this.renderIcon}
              textStyle={{height: 40}}
              label={(evaProps) => (
                <Text
                  category="p1"
                  {...evaProps}
                  style={[style.boldFont, style.label, style.colorLight]}>
                  Confirm Password
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
        </Card>
      </View>
    );
  }
}
