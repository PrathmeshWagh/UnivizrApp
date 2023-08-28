import { View, Text, StyleSheet } from "react-native"
function About() {
  return (
    <View style={styles.aboutTextContainer}>
      <Text style={styles.aboutText}>
        Western Sydney University is a world-class university with a growing international
        reach and reputation for academic excellence and impact-driven research. Western Sydney
        University is a world-class university with a growing international reach and reputation
        for academic excellence and impact-driven research.
      </Text>
    </View>
  )
}

export default About;

const styles = StyleSheet.create({
  aboutTextContainer: {
    marginTop: 20,
    marginHorizontal: 10
  },
  aboutText: {
    color: 'black'
  }
})
