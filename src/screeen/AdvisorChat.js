import { useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native"



function AdvisorChat({ navigation, route }) {
  const advisorData = route.params.selectedPerson


  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <Image source={advisorData.image} style={styles.advisorimg} />
          <Text style={styles.advisorname}>{advisorData.name}</Text>
        </View>
      )

    })
  }, [])

  return (
    <Text>HII</Text>
  )
}
export default AdvisorChat;

const styles = StyleSheet.create({
  advisorimg: {
    width: 50,
    height: 50,
    borderRadius: 25,


  },
  advisorname: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    paddingLeft: 10
  }
})