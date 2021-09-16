import React, {Component} from 'react';
import {View} from 'react-native';
import {
  Select,
  Card,
  Text,
  Radio,
  SelectItem,
  Input,
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from '../assets/style';

export default class RecieverInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      date: new Date(),
      checked: false,
      data: ['Lagos'],
    };
  }

  calendarIcon() {
    return <Icon name="calendar" size={20} color="#000" />;
  }
  renderOption = (title) => <SelectItem title={title} />;

  render() {
    const {checked, selectedIndex} = this.state;
    return (
      <Card style={[style.fullHeight, style.noBorder, style.progressComponent]}>
        <View style={style.displayFlex}>
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
        <View style={style.sm_margin}>
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
                  Reciever's Name
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
                  Reciever's Phone number
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
                  style={[
                    style.openSansRegular,
                    style.label,
                    style.colorLight,
                  ]}>
                  Reciever's Address
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
                    Reciever's Landmark
                  </Text>
                )}
                style={[style.input, style.boxWithShadow]}
              />
            </View>
          </View>
        </View>
      </Card>
    );
  }
}
