import { StyleSheet, Text, View } from 'react-native';
const testImg = require("./assets/Untitled_Artwork.jpg");

const _layout = () => {
  return (
    <View style={styles.container}>
      <Text>Song name</Text>
      <image source ={testImg}/>
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