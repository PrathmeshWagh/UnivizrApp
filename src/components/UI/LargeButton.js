import { Pressable, Text, StyleSheet } from 'react-native'


function LargeButton({ text, onPress }) {
  return (
    <Pressable onPress={onPress}
      style={styles.ApplyBtn}>
      <Text style={styles.applybtnText}>{text}</Text>
    </Pressable>
  )
}

export default LargeButton;
const styles = StyleSheet.create({
  ApplyBtn: {
    backgroundColor: '#6B0554',
    borderRadius: 8,
    height: 50,
    marginLeft: 20,
    marginRight: 20
  },
  applybtnText: {
    textAlign: 'center',
    padding: 15,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  }
})