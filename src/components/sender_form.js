import React, {Component} from 'react';
import {View, ImageBackground} from 'react-native';
import {
  Card,
  Text,
  Datepicker,
  Radio,
  SelectItem,
  Select,
  Input,
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from '../assets/style';
import {ScrollView} from 'react-native-gesture-handler';

export default class SenderInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      checked: false,
      selectedIndex: 0,
      data: ['Lagos'],
    };
  }

  calendarIcon() {
    return <Icon name="calendar" size={20} color="#000" />;
  }

  renderOption = (title) => <SelectItem title={title} />;

  render() {
    const {date, checked, selectedIndex} = this.state;
    return (
      <Card style={[style.fullHeight, style.noBorder, style.progressComponent]}>
        <View>
          <View style={[style.displayFlex]}>
            <Radio
              status="info"
              checked={checked}
              onChange={(nextChecked) => this.setState({checked: nextChecked})}>
              {(evaProps) => (
                <Text
                  {...evaProps}
                  style={[style.authText, style.openSansRegular]}>
                  Use Profile Info
                </Text>
              )}
            </Radio>
          </View>
        </View>
        <View>
          <Input
            textStyle={{height: 30}}
            label={(evaProps) => (
              <Text
                category="p1"
                {...evaProps}
                style={[style.openSansRegular, style.label, style.colorLight]}>
                Sender's Name
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
                style={[style.openSansRegular, style.label, style.colorLight]}>
                Sender's Phone number
              </Text>
            )}
            style={[style.input, style.boxWithShadow]}
            value={checked ? '081561266892' : ''}
          />
        </View>
        <View>
          <Input
            textStyle={{height: 30}}
            label={(evaProps) => (
              <Text
                category="p1"
                {...evaProps}
                style={[style.openSansRegular, style.label, style.colorLight]}>
                Sender's Address
              </Text>
            )}
            style={[style.input, style.boxWithShadow]}
            value={checked ? '4 Shaw Road Ikoyi' : ''}
          />
        </View>
        <View>
          <Text
            category="p1"
            style={[style.openSansRegular, style.label, style.colorLight]}>
            State
          </Text>
          <Select
            selectedIndex={selectedIndex}
            style={[style.input, style.boxWithShadow]}
            value={this.state.data[selectedIndex.row]}
            onSelect={(index) => this.setState({selectedIndex: index})}>
            {this.state.data.map(this.renderOption)}
          </Select>
        </View>
        <View>
          <Input
            textStyle={{height: 30}}
            label={(evaProps) => (
              <Text
                category="p1"
                {...evaProps}
                style={[style.openSansRegular, style.label, style.colorLight]}>
                Sender's Landmark
              </Text>
            )}
            style={[style.input, style.boxWithShadow]}
          />
        </View>
        <View>
          <Datepicker
            date={date}
            controlStyle={style.lighterBackground}
            label={(evaProps) => (
              <Text
                {...evaProps}
                style={[style.openSansRegular, style.label, style.colorLight]}>
                Pick Date
              </Text>
            )}
            onSelect={(nextDate) => this.setState({date: nextDate})}
            accessoryRight={this.calendarIcon}
          />
        </View>
      </Card>
    );
  }
}
