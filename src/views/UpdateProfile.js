import React, { Component } from "react";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import Header from "../components/header";
import { View } from "react-native";
import style from "../assets/style";
import ProfileInfo from "../components/ProfileInfo";
import KYCInfo from "../components/KYCinfo";
import AccountDetails from "../components/AccountDetails";

const Profile = (props) => {
  const onSubmit = () => {
    props.navigation.navigate("OrderSummary");
  };
  const buttonTextStyle = {
    color: "#fff",
    fontFamily: "OpenSans-Regular",
    fontSize: 15,
  };
  return (
    <View style={[style.fullHeight, style.primaryBackground]}>
      <View style={style.dashboardContainer}>
        <Header navigation={props.navigation} title="Update Profile" stacknav />
      </View>
      <View style={[style.flex, style.whiteBackground]}>
        <ProgressSteps
          progressBarColor="#072956"
          activeStepIconBorderColor="#072956"
          labelFontFamily="OpenSans-Regular"
          activeLabelColor="#072956"
          completedStepIconColor="#072956"
          completedLabelColor="#072956"
          topOffset={20}
          completedProgressBarColor="#072956"
        >
          <ProgressStep
            label="Basic Info"
            nextBtnTextStyle={buttonTextStyle}
            nextBtnStyle={style.stepsButtons}
            nextBtnDisabled={false}
          >
            <ProfileInfo />
          </ProgressStep>
          <ProgressStep
            label="KYC"
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
            previousBtnStyle={style.stepsButtons}
            nextBtnStyle={style.stepsButtons2}
            nextBtnTextStyle={{ color: "#F0AB3C" }}
          >
            <KYCInfo />
          </ProgressStep>
          <ProgressStep
            label="Account Details"
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
            previousBtnStyle={style.stepsButtons}
          >
            <AccountDetails />
          </ProgressStep>
        </ProgressSteps>
      </View>
    </View>
  );
};
export default Profile;
