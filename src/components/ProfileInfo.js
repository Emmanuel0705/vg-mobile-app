import React, { Component, useState } from "react";
import { View } from "react-native";
import {
  Card,
  Text,
  SelectItem,
  Select,
  Input,
  Button,
} from "@ui-kitten/components";
import Toast from "react-native-toast-message";

import style from "../assets/style";
import countries from "../config/countries.json";

const ProfileInfo = (props) => {
  const [genders, setGenders] = useState(["Male", "female"]);
  const [countryIndex, setCountryIndex] = useState(0);
  const [stateIndex, setStateIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [formData, setFormData] = useState({
    phone: "",
    gender: "",
    country: "",
    city: "",
    whatsapp: "",
    address: "",
    state: "",
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
  });

  const renderOption = (title, i) => (
    <SelectItem key={`i${title}`} title={title} />
  );

  const onSubmit = () => {
    if (!formData.email) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "",
        text2: "Provide email address",
        visibilityTime: 4000,
      });
    } else if (!formData.middleName) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "",
        text2: "Provide middle name",
        visibilityTime: 4000,
      });
    } else if (!formData.gender) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "",
        text2: "Gender required",
        visibilityTime: 4000,
      });
    } else if (!formData.firstName) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "",
        text2: "Enter first name",
        visibilityTime: 4000,
      });
    } else if (!formData.lastName) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "",
        text2: "Enter last name",
        visibilityTime: 4000,
      });
    } else if (!formData.phone) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "",
        text2: "Enter phone number",
        visibilityTime: 4000,
      });
    } else if (!formData.whatsapp) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "",
        text2: "Enter whatsApp number",
        visibilityTime: 4000,
      });
    } else if (!formData.city) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "",
        text2: "Enter your city",
        visibilityTime: 4000,
      });
    } else if (!formData.state) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "",
        text2: "please select state",
        visibilityTime: 4000,
      });
    } else if (!formData.country) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "",
        text2: "Select Country",
        visibilityTime: 4000,
      });
    }
    if (
      formData.firstName &&
      formData.lastName &&
      formData.middleName &&
      formData.email &&
      formData.gender &&
      formData.country &&
      formData.state &&
      formData.city &&
      formData.address &&
      formData.phone &&
      formData.whatsapp
    ) {
      const payload = {
        ...formData,
        name: `${formData.firstName} ${formData.lastName} ${formData.middleName}`,
      };
      console.log(payload);
    }
  };

  return (
    <Card style={[style.fullHeight, style.noBorder, style.progressComponent]}>
      <View>
        <Input
          textStyle={{ height: 30 }}
          label={(evaProps) => (
            <Text
              category="p1"
              {...evaProps}
              style={[style.openSansRegular, style.label, style.colorLight]}
            >
              First Name
            </Text>
          )}
          style={[style.input, style.boxWithShadow]}
          defaultValue={formData.firstName}
          placeholder="First Name"
          onChangeText={(e) => setFormData({ ...formData, firstName: e })}
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
              Last Name
            </Text>
          )}
          style={[style.input, style.boxWithShadow]}
          defaultValue={formData.lastName}
          placeholder="Surname"
          onChangeText={(e) => setFormData({ ...formData, lastName: e })}
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
              Middle Name
            </Text>
          )}
          style={[style.input, style.boxWithShadow]}
          defaultValue={formData.middleName}
          placeholder="Middle Name"
          onChangeText={(e) => setFormData({ ...formData, middleName: e })}
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
              Email
            </Text>
          )}
          style={[style.input, style.boxWithShadow]}
          defaultValue={formData.email}
          placeholder="123@example.com"
          keyboardType="email-address"
          onChangeText={(e) => setFormData({ ...formData, email: e })}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <Text
          category="p1"
          style={[style.openSansRegular, style.label2, style.colorLight]}
        >
          Gender
        </Text>
        <Select
          style={[style.input, style.boxWithShadow]}
          defaultValue={formData.gender}
          onSelect={(index) => {
            setSelectedIndex(index.row);
            setFormData({ ...formData, gender: genders[index.row] });
          }}
          value={formData.gender}
        >
          {genders.map(renderOption)}
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
              Phone Number
            </Text>
          )}
          style={[style.input, style.boxWithShadow]}
          defaultValue={formData.phone}
          placeholder="+1234567890"
          keyboardType="phone-pad"
          onChangeText={(e) => setFormData({ ...formData, phone: e })}
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
              WhatsApp Number
            </Text>
          )}
          style={[style.input, style.boxWithShadow]}
          defaultValue={formData.whatsapp}
          placeholder="+1234567890"
          keyboardType="number-pad"
          onChangeText={(e) => setFormData({ ...formData, whatsapp: e })}
        />
      </View>

      <View>
        <Text category="p1" style={[style.openSansRegular, style.colorLight]}>
          Country
        </Text>
        <Select
          style={[style.input, style.boxWithShadow]}
          defaultValue={formData.country}
          value={formData.country}
          onSelect={(index) => {
            setFormData({
              ...formData,
              country: countries.countries[index.row].country,
              state: "",
            });
            setStateIndex(0);

            setCountryIndex(index.row);
          }}
        >
          {countries.countries.map((e, i) => (
            <SelectItem key={`${e.country}${i}`} title={e.country} />
          ))}
        </Select>
      </View>
      <View>
        <Text category="p1" style={[style.openSansRegular, style.colorLight]}>
          State
        </Text>
        <Select
          style={[style.input, style.boxWithShadow]}
          value={formData.state}
          defaultValue={formData.state}
          onSelect={(index) => {
            setStateIndex(index.row);
            setFormData({
              ...formData,
              state: countries.countries[countryIndex].states[index.row],
            });
          }}
        >
          {(formData.country
            ? countries.countries[countryIndex].states
            : []
          ).map((e, i) => (
            <SelectItem key={`${e}${i}`} title={e} />
          ))}
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
              City
            </Text>
          )}
          style={[style.input, style.boxWithShadow]}
          defaultValue={formData.city}
          placeholder="City/Town"
          onChangeText={(e) => setFormData({ ...formData, city: e })}
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
              Address
            </Text>
          )}
          style={[style.input, style.boxWithShadow]}
          placeholder="Landmark"
          defaultValue={formData.address}
          onChangeText={(e) => setFormData({ ...formData, address: e })}
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
export default ProfileInfo;
