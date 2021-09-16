import React, {Component} from 'react';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import Header from '../components/header';
import {View, Image} from 'react-native';
import {Text, Button, Radio} from '@ui-kitten/components';
import Modal from '../components/modal';
import style from '../assets/style';
import SenderInfo from '../components/sender_form';
import RecieverInfo from '../components/reciever_info';
import Description from '../components/description';
import * as Animatable from 'react-native-animatable';

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
      radio2: false,
      radio1: false,
    };
  }
  onSubmit = () => {
    this.props.navigation.navigate('OrderSummary');
  };
  render() {
    const {radio1, radio2} = this.state;
    const buttonTextStyle = {
      color: '#fff',
      fontFamily: 'OpenSans-Regular',
      fontSize: 15,
    };
    return (
      <View style={[style.fullHeight, style.primaryBackground]}>
        <View style={style.dashboardContainer}>
          <Header
            navigation={this.props.navigation}
            title="Update Profile"
            stacknav
          />
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
            completedProgressBarColor="#072956">
            <ProgressStep
              label="Sender's Info"
              nextBtnTextStyle={buttonTextStyle}
              nextBtnStyle={style.stepsButtons}>
              <SenderInfo />
            </ProgressStep>
            <ProgressStep
              label="Reciever's Info"
              nextBtnTextStyle={buttonTextStyle}
              previousBtnTextStyle={buttonTextStyle}
              previousBtnStyle={style.stepsButtons}
              nextBtnStyle={style.stepsButtons}>
              <RecieverInfo />
            </ProgressStep>
            <ProgressStep
              label="Description"
              nextBtnTextStyle={buttonTextStyle}
              previousBtnTextStyle={buttonTextStyle}
              previousBtnStyle={style.stepsButtons}
              onSubmit={this.onSubmit}
              nextBtnStyle={style.stepsButtons}>
              <Description />
            </ProgressStep>
          </ProgressSteps>
        </View>
        <Modal
          isModalVisible={this.state.modalVisible}
          body={
            <>
              <Animatable.View
                animation="pulse"
                easing="ease-out"
                delay={5}
                iterationCount="infinite">
                <Image
                  source={require('../assets/images/bike1.png')}
                  style={[style.sm_margin, style.centeredImage]}
                />
              </Animatable.View>
              <View style={[style.displayFlex, style.flexColumn]}>
                <Radio
                  status="success"
                  checked={radio1}
                  onChange={(nextChecked) =>
                    this.setState({radio1: nextChecked, radio2: false})
                  }>
                  {(evaProps) => (
                    <Text
                      {...evaProps}
                      style={[style.authText, style.openSansRegular]}>
                      Express
                    </Text>
                  )}
                </Radio>
                <Radio
                  status="success"
                  checked={radio2}
                  onChange={(nextChecked) =>
                    this.setState({radio2: nextChecked, radio1: false})
                  }>
                  {(evaProps) => (
                    <Text
                      {...evaProps}
                      style={[style.authText, style.openSansRegular]}>
                      Regular
                    </Text>
                  )}
                </Radio>
              </View>
              <Text
                category="p2"
                style={[
                  style.regularFont,
                  style.textCenter,
                  style.messageBody,
                  style.sm_margin,
                ]}>
                Using Express mode, means that your dispatch gets delivered
                quickly with no delays
              </Text>
              <Text
                category="p2"
                style={[style.boldFont, style.textCenter, style.messageBody]}>
                Note: Extra charge of ₦1000 applies
              </Text>
              <Button
                style={[
                  style.sm_margin,
                  style.primaryBackground,
                  style.openSansRegular,
                  style.noBorder,
                ]}
                onPress={() => {
                  this.setState({modalVisible: !this.state.modalVisible});
                }}>
                Continue
              </Button>
            </>
          }
        />
      </View>
    );
  }
}
