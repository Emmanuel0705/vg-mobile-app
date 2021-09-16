import React, { useState } from "react";
import * as firebase from "firebase";

import { TouchableOpacity, View, LogBox, Image, Alert } from "react-native";
import {
  Select,
  Card,
  Text,
  SelectItem,
  Input,
  Button,
} from "@ui-kitten/components";
import Toast from "react-native-toast-message";

import * as ImagePicker from "expo-image-picker";

import style from "../assets/style";
import { Icon, Thumbnail } from "native-base";

const firebaseConfig = {
  apiKey: "AIzaSyAb_74Slm90KkDIdhGZR3bVrwGm30T3W0c",
  authDomain: "vglobal-dbx.firebaseapp.com",
  projectId: "vglobal-dbx",
  storageBucket: "vglobal-dbx.appspot.com",
  messagingSenderId: "397365610818",
  appId: "1:397365610818:web:cf51910e241fa6877860db",
  measurementId: "G-VEEZYR902B",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
LogBox.ignoreLogs([`Setting a timer for a long period`]);

const KYCInfo = () => {
  const data = ["Nation ID", "Driver License", "International Passport"];
  const [uploading, setUploading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [formData, setFormData] = useState({
    front: "",
    back: "",
    type: "",
    number: "",
  });

  const renderOption = (title) => <SelectItem key={`${title}`} title={title} />;

  const _pickImage = async (type) => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({});
    if (pickerResult.cancelled) return;
    handleSetImg(type, pickerResult.uri);
    // this._handleImagePicked(pickerResult);
  };
  const handleSetImg = (type, uri) => {
    if (type === "front") {
      setFormData({ ...formData, front: uri });
      return;
    }
    setFormData({ ...formData, back: uri });
  };
  const _handleImagePicked = async (uri) => {
    try {
      setUploading(true);

      const uploadUrl = await uploadImageAsync(uri);
      setImage(uploadUrl);
    } catch (e) {
      console.log({ ERROR: e.message });
      alert("Upload failed, sorry ");
    } finally {
      setUploading(false);
    }
  };

  async function uploadImageAsync(uri) {
    // Why are we using XMLHttpRequest? See:
    // https://github.com/expo/expo/issues/2402#issuecomment-443726662
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    const ref = firebase.storage().ref().child(`identity/${Date.now()}`);

    const snapshot = await ref.put(blob);

    // We're done with the blob, close and release it
    blob.close();

    const res = await snapshot.ref.getDownloadURL();
    console.log(res);
    return res;
  }

  const onSubmit = () => {
    if (!formData.type) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "",
        text2: "Provide a means of Identification",
        visibilityTime: 4000,
      });
    } else if (!formData.number) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "",
        text2: "Provide the selected ID number",
        visibilityTime: 4000,
      });
    } else if (!formData.front) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "",
        text2: "Upload ID image front",
        visibilityTime: 4000,
      });
    } else if (!formData.back) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "",
        text2: "Upload ID image Back",
        visibilityTime: 4000,
      });
    }
    if (formData.number && formData.type && formData.front && formData.back) {
      const payload = {
        ...formData,
      };
      console.log(payload);
    }
  };

  return (
    <Card style={[style.fullHeight, style.noBorder, style.progressComponent]}>
      <View style={{ flex: 1 }}>
        <View style={{ marginTop: 10 }}>
          <Text category="p1" style={[style.openSansRegular, style.colorLight]}>
            Means Of Identification
          </Text>
          <Select
            style={[style.input, style.boxWithShadow]}
            value={formData.type}
            defaultValue={formData.type}
            onSelect={(index) => {
              setSelectedIndex(index.row);
              setFormData({ ...formData, type: data[index.row] });
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
                Upload ID Card/Passport Number
              </Text>
            )}
            style={[style.input, style.boxWithShadow]}
            defaultValue={formData.number}
            placeholder="ID Number"
            keyboardType="visible-password"
            onChangeText={(text) => setFormData({ ...formData, number: text })}
          />
        </View>
        <View style={{ height: 200 }}>
          <TouchableOpacity
            style={{
              marginVertical: 30,
              fontFamily: "ProductSans-Regular",
              backgroundColor: "#EEF5FD",
              height: 40,
              shadowColor: "#eee",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.5,
              shadowRadius: 2,
              elevation: 3,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              _pickImage("front");
            }}
          >
            <Text
              style={[
                { top: -25, left: 0, color: "#3B5472", position: "absolute" },
                style.openSansRegular,
              ]}
            >
              Upload ID Image (Front)
            </Text>
            <Text>
              <Icon name="arrow-up" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginVertical: 10,
              fontFamily: "ProductSans-Regular",
              backgroundColor: "#EEF5FD",
              height: 40,
              shadowColor: "#eee",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.5,
              shadowRadius: 2,
              elevation: 3,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              _pickImage("back");
            }}
          >
            <Text
              style={[
                { top: -25, left: 0, color: "#3B5472", position: "absolute" },
                style.openSansRegular,
              ]}
            >
              Upload ID Image (back)
            </Text>
            <Text>
              <Icon name="arrow-up" style={{}} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {formData.front || formData.back ? (
        <View
          style={{
            width: "100%",
            height: 80,
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: -20,
            marginVertical: 20,
          }}
        >
          {formData.front ? (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
              }}
            >
              <Text>Front</Text>
              <Image
                style={{ width: "95%", height: "100%" }}
                source={{
                  uri: `${formData.front}`,
                }}
              />
            </View>
          ) : (
            <Text />
          )}
          {formData.back ? (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
              }}
            >
              <Text>Back</Text>
              <Image
                style={{ width: "95%", height: "100%" }}
                source={{
                  uri: `${formData.back}`,
                }}
              />
            </View>
          ) : (
            <Text />
          )}
        </View>
      ) : (
        <View />
      )}

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

export default KYCInfo;
