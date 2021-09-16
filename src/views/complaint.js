import React, {Component} from 'react';
import {View, ToastAndroid, ImageBackground} from 'react-native';
import {Text, Button, Card, Input} from '@ui-kitten/components';
import style from '../assets/style';
import Header from '../components/header';

export default class Complaint extends Component {
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
            title="Complain"
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
                    Name
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
                    Email Address
                  </Text>
                )}
                style={[style.input, style.boxWithShadow]}
              />
            </View>
            <View>
              <Input
                multiline={true}
                textStyle={{minHeight: 85}}
                label={(evaProps) => (
                  <Text
                    category="p1"
                    {...evaProps}
                    style={[style.boldFont, style.label, style.colorLight]}>
                    Description
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
                <Text
                  {...evaProps}
                  style={[style.regularFont, style.colorWhite]}>
                  SUBMIT
                </Text>
              )}
            </Button>
          </Card>
        </View>
      </View>
    );
  }
}
