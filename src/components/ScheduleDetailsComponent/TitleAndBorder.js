import { View, Text, StyleSheet } from 'react-native'

function TitleAndBorder({ title, text }) {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text>{text}</Text>
      </View>
      <View style={{ borderBottomWidth: 4, borderColor: '#E8E8E8', }} />
    </View>
  )
}

export default TitleAndBorder;

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginVertical: 15
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
})