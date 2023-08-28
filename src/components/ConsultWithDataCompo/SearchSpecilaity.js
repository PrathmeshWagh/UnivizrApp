import { Text, View, StyleSheet } from "react-native";

function SearchSpeciality() {
  return (
    <View style={styles.specialityContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text} >Science</Text>
      </View>
      <View style={{ borderBottomWidth: 0.5 }}></View>
      <View style={styles.textContainer}>
        <Text style={styles.text} >Law</Text>
      </View>
      <View style={{ borderBottomWidth: 0.5 }}></View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Business</Text>
      </View>
      <View style={{ borderBottomWidth: 0.5 }}></View>
      <View style={styles.textContainer}>
        <Text style={styles.text} >Drawing</Text>
      </View>
      <View style={{ borderBottomWidth: 0.5 }}></View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Maths</Text>
      </View>
      <View style={{ borderBottomWidth: 0.5 }}></View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Artists</Text>
      </View>
      <View style={{ borderBottomWidth: 0.5 }}></View>
    </View>

  )
}
export default SearchSpeciality

const styles = StyleSheet.create({
  specialityContainer: {
    flex: 1,

  },
  textContainer: {
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 20,
    height: 40,

  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  }

})