import * as React from 'react';
import {View, TouchableNativeFeedback} from 'react-native';
import {Text, Divider, Avatar} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import style from '../assets/style';
import {_retrieveData} from '../services/asyncStorage';
import {clearUserData} from '../redux/actions/user.action';
import {useDispatch} from 'react-redux';

const CustomDrawerContent = (props) => {
  const ripple = TouchableNativeFeedback.Ripple('#adacac', false);

  return (
    <>
      <DrawerContentScrollView {...props} style={style.customDrawerContainer}>
        <View style={style.primaryBackground}>
          <View style={[style.displayFlex, style.boxes]}>
            <Text
              category="h6"
              style={[style.regularFont, style.colorWhite, style.sm_margin]}>
              {/* {`${user.firstname} ${user.lastname}`} */}
            </Text>
          </View>
        </View>

        <DrawerItemList {...props}>
          <DrawerItem label="Help" />
        </DrawerItemList>
      </DrawerContentScrollView>

      <View elevation={6}>
        <Divider style={style.divider} />
        <View
          style={[style.customDrawerFooter, style.displayFlex, style.flexRow]}>
          <Icon name="logout" size={20} color="#000" />
          <View>
            <TouchableNativeFeedback
              background={ripple}
              onPress={() => console.log('LOGOUT')}>
              <Text category="h6" style={[style.regularFont, style.colorBlack]}>
                Logout
              </Text>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    </>
  );
};

export default CustomDrawerContent;
