import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import ApplyForm from "./ApplyForm";

function Apply() {
  const [isApplyFormVisible, setIsApplyFormVisible] = useState(false)

  function updateProfileHandler() {
    setIsApplyFormVisible(true)
  }

  return (

    <View>
      {isApplyFormVisible ?
        <ApplyForm /> :
        <>
          <Pressable style={styles.imgAndTextContainer} onPress={updateProfileHandler}>
            <Image source={require('../../assest/exclamationImg.png')} style={styles.imgContainer} />
          </Pressable>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Update your profile to be able to apply</Text>
          </View>
        </>
      }

    </View>

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