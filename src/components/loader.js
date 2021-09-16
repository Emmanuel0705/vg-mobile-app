import React from 'react';
import AnimatedLoader from 'react-native-animated-loader';
import { StyleSheet, Text } from 'react-native';

export const Loader = ({visible}) => (
  <AnimatedLoader
    visible={visible}
    overlayColor="rgba(255,255,255,0.75)"
    source={require('../assets/images/loading.json')}
    animationStyle={styles.lottie}
    speed={1}>
    <Text>Loading...</Text>
  </AnimatedLoader>
);

const styles = StyleSheet.create({
  lottie: {
    width: 300,
    height: 200,
  },
});
