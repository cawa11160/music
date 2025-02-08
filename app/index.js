import { StyleSheet, Text, View } from "react-native";


export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.subtitle}>Song name</Text>
        <Text style={styles.subtitle}>Artist name</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: "center",
    justifyContent:'center',
  },
  main: {
    flex: 1,
    justifyContent: "left",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  subtitle: {
    fontSize: 20,
    color: "#38434D",
  },
});
