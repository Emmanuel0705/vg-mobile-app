import React from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import defaultStyle from '../assets/style';
import style from '../assets/style';

function CustomTextInput({icon, label, ...otherProps}) {
  return (
    <View style={styles.container}>
    {label && <Text style={styles.label} >{label}</Text>}
      <MaterialCommunityIcons
        name={icon}
        size={20}
        style={styles.icon}
        color="black"
      />
      <TextInput
        style={[ styles.textInput]}
        {...otherProps}
        
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    borderColor: '#D4D4D4',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    padding: 10,
    width: '80%',
    marginVertical: 10,
    alignItems: 'center',
    marginLeft: 30,
  },
  icon: {
    marginRight: 10,
  },
  label: {
    position: 'absolute',
    top: -13,
    left: 20,
    backgroundColor: '#FAFAFA',
    fontFamily: 'serif',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInput: {
    width: '100%',
    borderColor: 'black',
    fontSize:20
  },
});

export default CustomTextInput;
