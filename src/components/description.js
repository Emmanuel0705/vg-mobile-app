import React, {Component} from 'react';
import {View} from 'react-native';
import {Card, Text, Select, SelectItem, Input} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ion from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';

import style from '../assets/style';
import * as RootNavigation from '../../RootNavigation';

export default class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      modalVisible: false,
      data: ['Regular', 'Express'],
      bikeActive: true,
      carActive: false,
      busActive: false,
      truckActive: false,
    };
  }

  renderOption = (title) => <SelectItem title={title} />;

  moveToPreview = (props) => {
    RootNavigation.navigate('OrderSummary');
  };

  render() {
    const {
      selectedIndex,
      bikeActive,
      carActive,
      busActive,
      truckActive,
    } = this.state;
    return (
      <Card style={[style.fullHeight, style.noBorder, style.progressComponent]}>
        <View>
          <Text
            category="p1"
            style={[style.boldFont, style.label, style.colorLight]}>
            Priority
          </Text>
          <Select
            selectedIndex={selectedIndex}
            style={style.input}
            value={this.state.data[selectedIndex.row]}
            onSelect={(index) => this.setState({selectedIndex: index})}>
            {this.state.data.map(this.renderOption) }
          </Select>
          <View style={style.orderHistory}>
            <View
              style={[style.displayFlex, style.flexRow, style.spaceBetween]}>
              <TouchableOpacity
                onPress={() => {
                  this.state.carActive
                    ? this.setState({carActive: !carActive})
                    : this.state.carActive;
                  this.state.truckActive
                    ? this.setState({truckActive: !truckActive})
                    : this.state.truckActive;
                  this.state.busActive
                    ? this.setState({busActive: !busActive})
                    : this.state.busActive;
                  this.setState({bikeActive: !bikeActive});
                }}>
                <View
                  style={
                    bikeActive
                      ? [style.boxes, style.primaryBackground]
                      : [style.boxes, style.lighterBackground]
                  }>
                  <Ion
                    name="motorcycle"
                    color={bikeActive ? 'white' : '#218BAC'}
                    size={30}
                  />
                  <Text
                    style={[
                      style.openSansRegular,
                      bikeActive ? style.colorWhite : style.colorPrimary,
                      style.textCenter,
                    ]}>
                    Bike
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.state.bikeActive
                    ? this.setState({bikeActive: !bikeActive})
                    : this.state.bikeActive;
                  this.state.truckActive
                    ? this.setState({truckActive: !truckActive})
                    : this.state.truckActive;
                  this.state.busActive
                    ? this.setState({busActive: !busActive})
                    : this.state.busActive;
                  this.setState({carActive: !carActive});
                }}>
                <View
                  style={
                    carActive
                      ? [style.boxes, style.primaryBackground]
                      : [style.boxes, style.lighterBackground]
                  }>
                  <Icon
                    name="car"
                    size={30}
                    color={carActive ? 'white' : '#218BAC'}
                  />
                  <Text
                    style={[
                      style.openSansRegular,
                      carActive ? style.colorWhite : style.colorPrimary,
                      style.textCenter,
                    ]}>
                    Car
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.state.bikeActive
                    ? this.setState({bikeActive: !bikeActive})
                    : this.state.bikeActive;
                  this.state.truckActive
                    ? this.setState({truckActive: !truckActive})
                    : this.state.truckActive;
                  this.state.carActive
                    ? this.setState({carActive: !carActive})
                    : this.state.carActive;
                  this.setState({busActive: !busActive});
                }}>
                <View
                  style={
                    busActive
                      ? [style.boxes, style.primaryBackground]
                      : [style.boxes, style.lighterBackground]
                  }>
                  <Icon
                    name="bus"
                    size={30}
                    color={busActive ? 'white' : '#218BAC'}
                  />
                  <Text
                    style={[
                      style.openSansRegular,
                      busActive ? style.colorWhite : style.colorPrimary,
                      style.textCenter,
                    ]}>
                    Bus
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.state.bikeActive
                    ? this.setState({bikeActive: !bikeActive})
                    : this.state.bikeActive;
                  this.state.carActive
                    ? this.setState({carActive: !carActive})
                    : this.state.carActive;
                  this.state.busActive
                    ? this.setState({busActive: !busActive})
                    : this.state.busActive;
                  this.setState({truckActive: !truckActive});
                }}>
                <View
                  style={
                    truckActive
                      ? [style.boxes, style.primaryBackground]
                      : [style.boxes, style.lighterBackground]
                  }>
                  <Icon
                    name="truck-fast"
                    size={30}
                    color={truckActive ? 'white' : '#218BAC'}
                  />
                  <Text
                    style={[
                      style.openSansRegular,
                      truckActive ? style.colorWhite : style.colorPrimary,
                      style.textCenter,
                    ]}>
                    Truck
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Input
              multiline={true}
              textStyle={{minHeight: 85}}
              label={(evaProps) => (
                <Text
                  category="p1"
                  {...evaProps}
                  style={[
                    style.openSansRegular,
                    style.label,
                    style.colorLight,
                  ]}>
                  Description
                </Text>
              )}
              style={[style.input, style.boxWithShadow]}
            />
          </View>
          <View>
            <Input
              textStyle={{height: 30}}
              label={(evaProps) => (
                <Text
                  category="p1"
                  {...evaProps}
                  style={[
                    style.openSansRegular,
                    style.label,
                    style.colorLight,
                  ]}>
                  Coupon Code
                </Text>
              )}
              style={[style.input, style.boxWithShadow]}
            />
          </View>
        </View>
      </Card>
    );
  }
}
