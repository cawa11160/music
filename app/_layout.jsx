import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const _layout = () => {
  return (
    <View style={styles.container}>
      <Text>Song name</Text>
    </View>
  );
}

export default _layout

const styles = StyleSheet.create({
  container: {flex: 1, 
    padding: 180,
    backgroundColour:"#fffff",
    alignItems:'flex-end'
  }
})