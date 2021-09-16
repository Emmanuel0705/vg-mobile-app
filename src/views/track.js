import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {Text, Button} from '@ui-kitten/components';
import Header from '../components/header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import style from '../assets/style';

export default class Tracker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[style.fullHeight, style.primaryBackground]}>
        <View style={style.dashboardContainer}>
          <Header navigation={this.props.navigation} title="Track" stacknav />
        </View>
        <View style={style.fullHeight}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <Marker
              coordinate={{latitude: 37.78825, longitude: -122.4324}}
              title="Rider"
              description="Rider"
              pinColor="#218BAC"
            />
          </MapView>
          <View style={style.mapbox}>
            <View style={[style.lighterBackground, style.boxes]}>
              <Text
                category="h5"
                style={[style.regularFont, style.colorPrimary]}>
                Flat Screen Delivery
              </Text>
              <Button
                status="danger"
                size="tiny"
                style={style.orderstatusButton}>
                {(evaProps) => (
                  <Text
                    {...evaProps}
                    style={[
                      style.regularFont,
                      style.colorWhite,
                      style.statusText,
                    ]}>
                    Pending
                  </Text>
                )}
              </Button>
              <View
                style={[style.displayFlex, style.flexRow, style.orderHistory]}>
                <Icon name="map-marker" size={30} color="#218BAC" />
                <Text
                  category="p2"
                  style={[style.sm_margin, style.regularFont]}>
                  23B Community Road, Allen Avenue, Ikeja
                </Text>
              </View>
              <View
                style={[style.displayFlex, style.flexRow, style.orderHistory]}>
                <Icon name="calendar" size={30} color="#218BAC" />
                <Text
                  category="p2"
                  style={[style.sm_margin, style.regularFont]}>
                  Tuesday, 22 August 1995
                </Text>
              </View>
            </View>
            <Image
              source={require('../assets/images/route.jpg')}
              style={style.responsiveImage}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
