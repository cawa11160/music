import { StyleSheet, Text, View } from 'react-native';
import {Link} from 'expo-router';
import React from 'react'

const _layout = () => {
  return (
    <view style={styles.container}>
      <Text>test!</Text>
    </view>
  );
}

export default _layout

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColour: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  }
})