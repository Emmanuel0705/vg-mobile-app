import React from 'react';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text} from '@ui-kitten/components';
import {TouchableOpacity} from 'react-native-gesture-handler';

import style from '../assets/style';

const Header = (props) => {
  return (
    <View style={[style.displayFlex, style.flexRow, style.spaceBetween]}>
      {props.stacknav ? (
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <Icon name="menu" size={30} color="#fff" />
        </TouchableOpacity>
      )}
      <Text
        category="h6"
        style={[style.sm_margin, style.regularFont, style.colorWhite]}>
        {props.title}
      </Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
        <Icon name="email" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
