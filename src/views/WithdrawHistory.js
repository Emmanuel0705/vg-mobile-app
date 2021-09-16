import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button, Card} from '@ui-kitten/components';

import {ScrollView} from 'react-native-gesture-handler';
import Header from '../components/header';
import style from '../assets/style';
const WithdrawHistory = (props) => {
  return (
    <ScrollView style={style.whiteBackground}>
      <View style={[style.fullHeight, style.primaryBackground]}>
        <View style={style.dashboardContainer}>
          <Header navigation={props.navigation} title="Withdraw History" />
          <View style={[style.walletContainer]}></View>
        </View>
        <View style={[style.homeContainer, style.roundededges]}>
          <Card style={[style.sm_margin, style.lightPrimaryBackground]}>
            <View
              style={[style.displayFlex, style.flexRow, style.spaceBetween]}>
              <View>
                <Text
                  category="h6"
                  style={[style.openSansBold, {paddingBottom: 10}]}>
                  12 - Jan - 2021
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

              <View style={{justifyContent: 'center'}}>
                <Text
                  category="h6"
                  style={[style.openSansBold, style.textRight]}>
                  ₦2000
                </Text>
              </View>
            </View>
            <View style={[style.displayFlex, style.sm_margin]}></View>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {},
});

export default WithdrawHistory;
