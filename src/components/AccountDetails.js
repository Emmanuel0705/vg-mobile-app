import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {
  Select,
  Card,
  Text,
  Input,
  SelectItem,
  Button,
} from '@ui-kitten/components';
import Toast from 'react-native-toast-message';

import style from '../assets/style';
import banks from '../config/banks.json';
import {getAccount, validateAccount} from '../services/user';
import {Loader} from './loader';
import {updateAccount} from '../services/user';
import {useDispatch, useSelector} from 'react-redux';
const AccountDetails = (props) => {
  const user = useSelector((store) => store.user).data;
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [data, setData] = useState(banks.map((b) => b.name));
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    accountNumber: '',
    bankName: '',
    accontName: '',
    bankCode: '',
    wallet: '',
  });

  const onSubmit = async () => {
    if (!formData.accountNumber) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: '',
        text2: 'Provide your bank account Number',
        visibilityTime: 4000,
      });
    }
    if (!formData.bankName) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: '',
        text2: 'Provide bank name',
        visibilityTime: 4000,
      });
    }

    if (
      formData.bankName &&
      formData.bankCode &&
      formData.accountNumber &&
      formData.accontName
    ) {
      const payload = {
        ...formData,
      };
      setLoading(true);
      const res = await updateAccount(user.token, payload);
      console.log(res);
      setLoading(false);
      if (res.success) {
        return;
        dispatch({...account, ...res.account});
      } else {
      }
    }
  };
  const getAccountName = async () => {
    formData.bankCode = banks.find((e) => e.name === formData.bankName).code;
    setLoading(true);
    const res = await validateAccount(
      formData.accountNumber,
      formData.bankCode,
    );
    setLoading(false);
    if (res.success) {
      const {account_name, account_number} = res.data;
      setFormData({
        ...formData,
        accontName: account_name,
        accountNumber: account_number,
      });
      return;
    } else {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: '',
        text2: 'Invalid account Number, Try again',
        visibilityTime: 4000,
      });
    }
  };

  useEffect(() => {
    getAccountDetails();
  }, []);

  const getAccountDetails = async () => {
    setLoading(true);
    const res = await getAccount(user.token);
    setLoading(false);
    if (res.success) {
      setFormData({
        ...formData,
        ...res.user,
      });
    }
    // else setReload(!reload);
  };

  const renderOption = (title) => <SelectItem key={`${title}`} title={title} />;

  return (
    <Card style={[style.fullHeight, style.noBorder, style.progressComponent]}>
      <Loader visible={loading} />

      <View style={{marginTop: 10}}>
        <Text category="p1" style={[style.openSansRegular, style.colorLight]}>
          Bank Name
        </Text>
        <Select
          style={[style.input, style.boxWithShadow]}
          value={formData.bankName}
          defaultValue={formData.bankName}
          onSelect={(index) => {
            setSelectedIndex(index.row);
            setFormData({
              ...formData,
              bankName: data[index.row],
              accontName: '',
              accountNumber: '',
            });
          }}>
          {data.map(renderOption)}
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
              Account Number
            </Text>
          )}
          style={[style.input, style.boxWithShadow]}
          defaultValue={formData.accountNumber}
          disabled={formData.accontName || !formData.bankName}
          placeholder="0123456789"
          keyboardType="numeric"
          onChangeText={(text) =>
            setFormData({...formData, accountNumber: text})
          }
        />
      </View>
      {formData.accontName ? (
        <View>
          <Input
            textStyle={{height: 30}}
            label={(evaProps) => (
              <Text
                category="p1"
                {...evaProps}
                style={[style.openSansRegular, style.label, style.colorLight]}>
                Account Name
              </Text>
            )}
            style={[style.input, style.boxWithShadow]}
            defaultValue={formData.accontName}
            value={formData.accontName}
            disabled
          />
        </View>
      ) : null}
      {formData.accontName ? (
        <View>
          <Input
            textStyle={{height: 30}}
            label={(evaProps) => (
              <Text
                category="p1"
                {...evaProps}
                style={[style.openSansRegular, style.label, style.colorLight]}>
                BTC/USDT Wallet Address{' '}
              </Text>
            )}
            style={[style.input, style.boxWithShadow]}
            defaultValue={formData.wallet}
            placeholder="Optional"
            keyboardType="visible-password"
            onChangeText={(text) => setFormData({...formData, wallet: text})}
          />
        </View>
      ) : null}
      {formData.accontName ? (
        <Button
          style={[
            style.sm_margin,
            style.primaryBackground,
            style.openSansRegular,
            style.noBorder,
          ]}
          onPress={() => onSubmit()}>
          Submit
        </Button>
      ) : (
        <Button
          style={[
            style.sm_margin,
            style.primaryBackground,
            style.openSansRegular,
            style.noBorder,
          ]}
          onPress={() => getAccountName()}>
          Validate Account
        </Button>
      )}
    </Card>
  );
};
export default AccountDetails;
