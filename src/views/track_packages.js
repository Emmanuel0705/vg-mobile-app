import React, {Component} from 'react';
import {View, ImageBackground} from 'react-native';
import {Text, Input, Button, Card} from '@ui-kitten/components';

import style from '../assets/style';
import Header from '../components/header';

export default class Track extends Component {
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
          <Header navigation={this.props.navigation} title="Track" />
        </View>
        <ImageBackground
          source={require('../assets/images/mapbg.jpg')}
          style={[style.fullHeight, style.boxes]}>
          <View style={style.sm_margin}>
            <Input
              textStyle={{height: 40}}
              label={(evaProps) => (
                <Text
                  category="p1"
                  {...evaProps}
                  style={[style.boldFont, style.label, style.colorLight]}>
                  Enter Tracking Code
                </Text>
              )}
              style={[style.input, style.boxWithShadow]}
            />
          </View>
          <Button
            size="large"
            style={[style.primaryBackground, style.regularFont, style.noBorder]}
            onPress={() => this.props.navigation.navigate('Tracker')}>
            TRACK NOW
          </Button>
        </ImageBackground>
      </View>
    );
  }
}
