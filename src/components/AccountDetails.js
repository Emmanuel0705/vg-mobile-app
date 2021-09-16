import React, { useState } from "react";
import { View } from "react-native";
import {
  Select,
  Card,
  Text,
  Input,
  SelectItem,
  Button,
} from "@ui-kitten/components";
import Toast from "react-native-toast-message";

import style from "../assets/style";
import banks from "../config/banks.json";

const AccountDetails = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [data, setData] = useState(banks.map((b) => b.name));

  const [formData, setFormData] = useState({
    accountNumber: "",
    bankName: "",
    accountName: "",
    bankCode: "",
    wallet: "",
  });

  const onSubmit = () => {
    if (!formData.accountNumber) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "",
        text2: "Provide your bank account Number",
        visibilityTime: 4000,
      });
    } else if (!formData.bankName) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "",
        text2: "Provide bank name",
        visibilityTime: 4000,
      });
    }

    if (
      formData.bankName &&
      formData.bankCode &&
      formData.accountNumber &&
      formData.accountName
    ) {
      const payload = {
        ...formData,
      };
      console.log(payload);
    }
  };

  const renderOption = (title) => <SelectItem key={`${title}`} title={title} />;

  return (
    <Card style={[style.fullHeight, style.noBorder, style.progressComponent]}>
      <View style={{ marginTop: 10 }}>
        <Text category="p1" style={[style.openSansRegular, style.colorLight]}>
          Bank Name
        </Text>
        <Select
          style={[style.input, style.boxWithShadow]}
          value={formData.bankName}
          defaultValue={formData.bankName}
          onSelect={(index) => {
            setSelectedIndex(index.row);
            setFormData({ ...formData, bankName: data[index.row] });
          }}
        >
          {data.map(renderOption)}
        </Select>
      </View>
      <View>
        <Input
          textStyle={{ height: 30 }}
          label={(evaProps) => (
            <Text
              category="p1"
              {...evaProps}
              style={[style.openSansRegular, style.label, style.colorLight]}
            >
              Account Number
            </Text>
          )}
          style={[style.input, style.boxWithShadow]}
          defaultValue={formData.accountNumber}
          placeholder="0123456789"
          keyboardType="numeric"
          onChangeText={(text) =>
            setFormData({ ...formData, accountNumber: text })
          }
        />
      </View>
      <View>
        <Input
          textStyle={{ height: 30 }}
          label={(evaProps) => (
            <Text
              category="p1"
              {...evaProps}
              style={[style.openSansRegular, style.label, style.colorLight]}
            >
              BTC/USDT Wallet Address{" "}
            </Text>
          )}
          style={[style.input, style.boxWithShadow]}
          defaultValue={formData.wallet}
          placeholder="Optional"
          keyboardType="visible-password"
          onChangeText={(text) => setFormData({ ...formData, wallet: text })}
        />
      </View>
      <Button
        style={[
          style.sm_margin,
          style.primaryBackground,
          style.openSansRegular,
          style.noBorder,
        ]}
        onPress={() => onSubmit()}
      >
        Submit
      </Button>
    </Card>
  );
};
export default AccountDetails;
