import React, {Component} from 'react';
import {View, ImageBackground} from 'react-native';
import {Text, Card, Divider} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from '../assets/style';
import Header from '../components/header';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Settings extends Component {
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
          <Header navigation={this.props.navigation} title="Settings" />
        </View>
        <Card style={[style.fullHeight]}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Password')}>
            <View
              style={[
                style.authView,
                style.displayFlex,
                style.spaceBetween,
                style.flexRow,
              ]}>
              <Text category="h6" style={[style.regularFont]}>
                Change Password
              </Text>
              <Icon name="chevron-right" size={30} />
            </View>
          </TouchableOpacity>
          <Divider style={[style.sm_margin]} />
          <View
            style={[
              style.sm_margin,
              style.displayFlex,
              style.spaceBetween,
              style.flexRow,
            ]}>
            <Text category="h6" style={[style.regularFont]}>
              Terms And Conditions
            </Text>
            <Icon name="chevron-right" size={30} />
          </View>
        </Card>
      </View>
    );
  }
}
