import React, {Component} from 'react';
import {View, ImageBackground} from 'react-native';
import {
  Text,
  Button,
  Card,
  Divider,
  RangeDatepicker,
} from '@ui-kitten/components';

import style from '../assets/style';
import Header from '../components/header';
import {ScrollView} from 'react-native-gesture-handler';

export default class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      range: '',
    };
  }
  render() {
    return (
      <ScrollView style={style.whiteBackground}>
        <View style={[style.fullHeight, style.primaryBackground]}>
          <View style={style.dashboardContainer}>
            <Header navigation={this.props.navigation} title="Messages" />
          </View>
          <Card style={[style.roundededges, style.fullHeight]}>
            <View style={[style.shadowCard, style.transactionCard]}>
              <Text category="p1" style={style.boldFont}>
                New Delivery
              </Text>
              <Text
                category="p2"
                style={[style.regularFont, style.sm_margin, style.messageBody]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
              <Text category="p2" style={[style.regularFont, style.colorGray]}>
                09-09-2020 07:23
              </Text>
            </View>
            <Divider style={style.messageDivider} />
            <View style={[style.shadowCard, style.transactionCard]}>
              <Text category="p1" style={style.boldFont}>
                New Delivery
              </Text>
              <Text
                category="p2"
                style={[style.regularFont, style.sm_margin, style.messageBody]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
              <Text category="p2" style={[style.regularFont, style.colorGray]}>
                09-09-2020 07:23
              </Text>
            </View>
            <Divider style={style.messageDivider} />
          </Card>
        </View>
      </ScrollView>
    );
  }
}
