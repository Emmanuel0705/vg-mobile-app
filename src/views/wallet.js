import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Button, Card, Divider, Datepicker} from '@ui-kitten/components';

import style from '../assets/style';
import Header from '../components/header';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
//2713XG

const Wallet = () => {
  const user = useSelector((store) => store.user).data;
  const dispatch = useDispatch();
  return (
    <ScrollView style={style.whiteBackground}>
      <View style={[style.fullHeight, style.primaryBackground]}>
        <View style={style.dashboardContainer}>
          {/* <Header navigation={this.props.navigation} title="Wallet" /> */}
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
            category="h5"
            style={[style.regularFont, style.colorWhite, style.textCenter]}>
            Balance:
          </Text>
          <Text
            category="h4"
            style={[style.regularFont, style.colorWhite, style.textCenter]}>
            <Text
              category="p2"
              style={[style.regularFont, style.colorWhite, style.textCenter]}>
              ₦
            </Text>
            0
          </Text>

          <Button status="success" size="small" style={style.sm_margin}>
            {(evaProps) => (
              <Text
                {...evaProps}
                style={[style.regularFont, style.colorWhite, style.textCenter]}>
                Withdraw
              </Text>
            )}
          </Button>
        </Card>
        <Card style={[style.roundededges, style.fullHeight]}>
          <View style={[style.displayFlex, style.flexRow, style.sm_margin]}>
            <Datepicker
              // date={this.state.from}
              style={style.halfWidth}
              controlStyle={[style.input, style.boxWithShadow]}
              label={(evaProps) => (
                <Text
                  {...evaProps}
                  style={[style.regularFont, style.sm_margin]}>
                  From
                </Text>
              )}
              // onSelect={(nextDate) => this.setState({from: nextDate})}
            />
            <Datepicker
              // date={this.state.to}
              style={style.halfWidth}
              controlStyle={[style.input, style.boxWithShadow]}
              label={(evaProps) => (
                <Text
                  {...evaProps}
                  style={[style.regularFont, style.sm_margin]}>
                  To
                </Text>
              )}
              // onSelect={(nextDate) => this.setState({to: nextDate})}
              // accessoryRight={this.calendarIcon}
            />
          </View>
          {user.transactions.length ? (
            user.transactions.map((e) => (
              <Card style={style.sm_margin}>
                <View
                  style={[
                    style.displayFlex,
                    style.flexRow,
                    style.spaceBetween,
                  ]}>
                  <View>
                    <Text category="h6" style={[style.boldFont]}>
                      {(e.amount / 100).toFixed(2)}
                    </Text>
                    <Button
                      size="tiny"
                      style={[style.creditStatusButton, style.noBorder]}>
                      {(evaProps) => (
                        <Text
                          {...evaProps}
                          style={[
                            style.colorWhite,
                            style.statusText,
                            style.creditStatusText,
                          ]}>
                          Credit
                        </Text>
                      )}
                    </Button>
                  </View>

                  <View>
                    <Text
                      category="p2"
                      style={[style.openSansBold, style.textRight]}>
                      {new Date(e.createdAt).toLocaleString()}
                    </Text>
                    <Text
                      category="h6"
                      style={[style.openSansBold, style.textRight]}>
                      {user.wallet} (BALANCE)
                    </Text>
                  </View>
                </View>
                <View style={[style.displayFlex, style.sm_margin]}>
                  <Text
                    category="s2"
                    style={[style.openSansBold, style.textRight]}></Text>
                </View>
              </Card>
            ))
          ) : (
            <Text style={{alignSelf: 'center', paddingTop: 20}}>
              No transaction Found
            </Text>
          )}
        </Card>
      </View>
    </ScrollView>
  );
};

export default Wallet;
