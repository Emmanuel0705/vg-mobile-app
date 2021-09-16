import React, {Component, useEffect, useState} from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {Text, Button, Card, Divider} from '@ui-kitten/components';
import * as Animatable from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ScrollView} from 'react-native-gesture-handler';

import Header from '../components/header';
import style from '../assets/style';
import {_retrieveData} from '../services/asyncStorage';
import {useSelector} from 'react-redux';
import {Loader} from '../components/loader';
import {getRefs} from '../services/refs';

const axios = require('axios');

const Referrals = (props) => {
  const user = useSelector((store) => store.user).data;
  const [referrals, setReferrals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getR();
  }, []);
  const getR = async () => {
    setLoading(true);
    console.log(user);
    const refs = await getRefs(user.token);
    setLoading(false);
    console.log(refs.res);
    if (refs.success) {
      setReferrals(refs.res);
    }
  };

  return (
    <ScrollView style={style.whiteBackground}>
      <Loader visible={loading} />
      <View style={[style.fullHeight, style.primaryBackground]}>
        <View style={style.dashboardContainer}>
          <Header navigation={props.navigation} title="" />
          <View style={[style.walletContainer]}>
            <Text
              category="h6"
              style={[
                style.regularFont,
                style.colorLight,
                style.textCenter,
                style.sm_margin,
              ]}>
              You have {referrals.length} referrals
            </Text>
            <Text
              category="h4"
              style={[style.regularFont, style.colorWhite, style.textCenter]}>
              <Text
                category="p2"
                style={[
                  style.regularFont,
                  style.colorWhite,
                  style.textCenter,
                ]}></Text>
              Referral ID: {user.referralId}
            </Text>
            <Button
              style={[
                style.sm_margin,
                style.center,
                style.lightBackground,
                style.noBorder,
                style.fullWidth,
              ]}
              onPress={() =>
                Linking.openURL(
                  `whatsapp://send?text=kindly join VGLOBAL with my referral ID:  ${user.referralId}`,
                )
              }>
              {(evaProps) => (
                <Text
                  {...evaProps}
                  style={[
                    style.regularFont,
                    style.colorWhite,
                    style.center,
                    style.displayFlex,
                  ]}>
                  Share
                </Text>
              )}
            </Button>
          </View>
        </View>
        <View style={[style.homeContainer, style.roundededges]}>
          {referrals.length ? (
            referrals.map((e) => (
              <View key={e._id} style={styles.refCard}>
                <Text style={styles.name}>{e.name}</Text>
                <Text style={styles.phone}>{e.phone}</Text>
                <Text style={styles.email}>{e.email}</Text>
                <Text style={{...styles.status}}>{e.status}</Text>
              </View>
            ))
          ) : (
            <Text>No Referral Found</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  refCard: {
    borderColor: '#D4D4D4',
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,

    marginVertical: 10,
  },
  name: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default Referrals;
