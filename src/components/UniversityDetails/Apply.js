import { View, Text, Image, StyleSheet } from "react-native"
function Apply() {
  return (
    <>
      <View style={styles.imgAndTextContainer}>
        <Image source={require('../../assest/exclamationImg.png')} style={styles.imgContainer} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Update your profile to be able to apply</Text>
      </View>

    </>

  )
}

export default Apply;

const styles = StyleSheet.create({
  imgAndTextContainer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  imgContainer: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center'
  }
})