import { Text, View, Pressable, StyleSheet } from "react-native";


function Button({ onPress, children, style }) {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({ pressed }) => (pressed && children == 'Call Now') && styles.pressed} >
        <View style={styles.button}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  )
}
export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: 'gray',
    borderRadius: 4
  }


})