import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import {Text, Button, Card, Divider} from '@ui-kitten/components';
import {ScrollView} from 'react-native-gesture-handler';
import {Paystack} from 'react-native-paystack-webview';
import Header from '../components/header';
import style from '../assets/style';
import {_retrieveData} from '../services/asyncStorage';
import {useDispatch, useSelector} from 'react-redux';
import {approveTransaction, getTransactions} from '../services/transaction';
import {storeUser} from '../redux/actions/user.action';
import {authUser} from '../services/user';
import {PAYSTACK_PK} from '../config/constants';

const axios = require('axios');

const Home = (props) => {
  const user = useSelector((store) => store.user).data;
  const dispatch = useDispatch();

  // const [user, setUser] = useState({});
  const [showPaystack, setShowPaystack] = useState(false);
  const [paid, setPaid] = useState(false);
  const [reload, setReload] = useState();

  useEffect(() => {
    getUser();
    getTrx();
  }, [reload]);

  const getUser = async () => {
    const res = await authUser(user.token);
    if (res.success) dispatch(storeUser({...user, ...res.user}));
    else setReload(!reload);
  };

  const getTrx = async () => {
    const {transactions, success} = await getTransactions(user.token);
    if (success) dispatch(storeUser({...user, transactions}));
    else setReload(!reload);
  };
  const submitPayment = async (trxid) => {
    const payload = {ref: trxid};
    const {success} = await approveTransaction(user.token, payload);
    setReload(!reload);
  };

  return (
    <ScrollView style={style.whiteBackground}>
      <View style={[style.fullHeight, style.primaryBackground]}>
        <View style={style.dashboardContainer}>
          <Header navigation={props.navigation} title="Dashboard" />
          <View style={[style.walletContainer]}>
            <Text
              category="h6"
              style={[
                style.regularFont,
                style.colorLight,
                style.textCenter,
                style.sm_margin,
              ]}>
              Wallet Balance
            </Text>
            <Text
              category="h4"
              style={[style.regularFont, style.colorWhite, style.textCenter]}>
              <Text
                category="p2"
                style={[style.regularFont, style.colorWhite, style.textCenter]}>
                ₦
              </Text>
              {user.wallet + user.bonusWallet})
            </Text>
            <Button
              style={[
                style.sm_margin,
                style.center,
                style.lightBackground,
                style.noBorder,
                style.fullWidth,
              ]}
              disabled={user.status !== 'NEW'}
              onPress={() => {
                setShowPaystack(true);
              }}>
              {(evaProps) => (
                <Text
                  {...evaProps}
                  style={[
                    style.regularFont,
                    style.colorWhite,
                    style.center,
                    style.displayFlex,
                  ]}>
                  {user.status === 'NEW' ? 'Pay Now' : user.status}
                </Text>
              )}
            </Button>
          </View>
        </View>
        <View style={[style.homeContainer, style.roundededges]}>
          <Text
            style={[style.boldFont, style.textCenter, style.sm_margin]}
            category="h6">
            Transactions
          </Text>
          {/* <Text style={[style.boldFont, style.sm_margin]} category="">Recent Transactions</Text> */}
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
        </View>
      </View>
      {showPaystack && (
        <View style={{flex: 1}}>
          <Paystack
            paystackKey={PAYSTACK_PK}
            amount={'50000.00'}
            billingEmail={user.email}
            activityIndicatorColor="green"
            onCancel={(e) => {
              // handle response here
              setShowPaystack(false);
            }}
            onSuccess={(res) => {
              setShowPaystack(false);
              if (res.status === 'success') {
                submitPayment(res.transactionRef.reference);
              } else {
                Alert.alert('Failed', 'your transaction was not successfull');
              }
            }}
            autoStart={true}
          />
        </View>
      )}
    </ScrollView>
  );
};
export default Home;
